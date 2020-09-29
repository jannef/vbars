<template>
  <div class="about">
    <h1>CamCorder</h1>
    {{ model }}
    <div id="container">
      <v-quagga
        :onDetected="logIt"
        :readerSize="readerSize"
        :readerTypes="readerTypes"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const model = ref('');

    function logIt(data: {codeResult: { code: string}}) {
      model.value = data.codeResult.code;
    }

    const readerSize = {
      width: 400,
      height: 600,
    };

    const readerTypes = [
      'ean_reader',
    ];

    return {
      model,
      logIt,
      readerSize,
      readerTypes,
    };
  },
};
</script>
