export default {
  // data: [
  //   {
  //     title: 'C# ASP.NET',
  //     price: 20.99,
  //     description: 'C# ASP.NET Description'
  //   },
  //   {
  //     title: 'C#',
  //     price: 10.50,
  //     description: 'C# Description'
  //   }
  // ]
  data() {
    const data = [];
    for (let i = 1; i < 1000; i += 1) {
      data.push({
        title: `${i}`,
        price: 10,
        description: `${i} Description`
      });
    }

    return data;
  }
};
