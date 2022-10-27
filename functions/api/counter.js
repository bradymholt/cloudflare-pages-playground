export async function onRequest(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  let counterValue = (await env.playground.get("counter")) || 0;
  counterValue++;
  await env.playground.put("counter", counterValue);
  return new Response(counterValue.toString(), {
    headers: {
      "Content-Type": "text",
    },
  });
}
