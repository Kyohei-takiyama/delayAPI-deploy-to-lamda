export const handler = async(event) => {
    // TODO implement
    const res = await delayAPI();
    console.log(res);
    return res;
};


async function delayAPI() {
  return new Promise((resolve) =>
    setTimeout(function () {
      const response = {
        statusCode: 200,
        body: JSON.stringify("お客さまId"),
      };
      resolve(response);
    }, 20000)
  );
}
