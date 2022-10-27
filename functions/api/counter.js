export async function onRequest(context) {
  let currentCounterValue = (await env.playground.get("counter")) || 0;

  currentCounterValue++;
  await env.playground.put("counter", currentCounterValue);
  return new Response(currentCounterValue.toString(), {
    headers: {
      "Content-Type": "text",
    },
  });
}
