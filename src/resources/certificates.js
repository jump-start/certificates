export default {
  data() {
    const data = [];
    for (let i = 1; i < 1000; i += 1) {
      data.push({
        id: i,
        title: `${i}`,
        price: 10,
        description: `${i} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget interdum ipsum. Fusce vestibulum porttitor enim in sodales. Sed dapibus orci quis elementum sodales. Donec sagittis, ante in vestibulum consequat, quam est ornare velit, at maximus ante purus eget nunc. Pellentesque et pulvinar tortor. Nulla facilisi. Pellentesque porttitor feugiat nisl, eu tincidunt mi vulputate vitae. Mauris semper rhoncus odio, id placerat augue facilisis vitae. Praesent mattis egestas venenatis. Mauris in leo at leo scelerisque blandit. Nunc et sollicitudin nisi, egestas tincidunt ante. Phasellus blandit venenatis orci, nec faucibus turpis volutpat at. In nec pharetra magna.`
      });
    }

    return data;
  }
};
