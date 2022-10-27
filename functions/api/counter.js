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

  const counterValue = await env["playground-var"].get("counter");
  const nextValue = counterValue++;
  await env["playground-var"].put("counter", counterValue++);
  return new Response(nextValue.toString());
}