<template>
  <div class="p-6 flex items-center justify-between bg-gray-100 rounded-md">
    <div>
      <h3 class="mb-2 text-xl font-semibold">The Job Position</h3>
      <p class="text-gray-600">The Company Name</p>
    </div>
    <div>
      <p class="mb-2">World Wide</p>
      <p class="mb-2">$60.000 - $65.000</p>
    </div>
    <div>
      <p>Posted Dec. 6. 2023</p>
    </div>
    <div>
      <NuxtLink
        class="py-4 px-6 bg-cyan-700 hover:bg-cyan-500 text-white rounded-md"
        @click.prevent="submit"
        >Apply</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const { $pdf } = useNuxtApp();
const mail = useMail();
import { storeToRefs } from "pinia";
import { useCvStore } from "~/store/cv";

const { cv } = storeToRefs(useCvStore());

const submit = () => {
  $pdf.new({
    plugins: [
      {
        page: [
          ({ Text }, context, current, total) => {
            Text(
              `${current}/${total}`,
              { fontSize: 20 },
              {
                x: context.width / 2,
                y: context.height - context.margins.bottom,
              }
            );
          },
          ({ Text }, context) => {
            Text(
              `${cv.value.name} CV`,
              {},
              {
                x: context.width / 2,
                y: context.margins.top - 20,
              }
            );
          },
        ],
      },
    ],
  });

  $pdf.add([
    {
      raw: `
    Name : ${cv.value.name}
    Email : ${cv.value.email}
    Skills : ${cv.value.skills}
  `,
      text: { fontSize: 22 },
    },
  ]);

  $pdf
    .run()
    .then(async (blobUrl) => {
      const response = await fetch(blobUrl);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        mail.send({
          subject: "My CV",
          text: "Please find attached my CV.",
          attachments: [
            {
              filename: "cv.pdf",
              content: base64data.split("base64,")[1],
              encoding: "base64",
              contentType: "application/pdf",
            },
          ],
        });
      };
    })
    .catch((err) => {
      console.error(err);
    });
};
</script>
