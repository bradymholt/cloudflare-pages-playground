export async function onRequest(context) {
  // Contents of context object
  const {    
    env, // same as existing Worker API    
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
