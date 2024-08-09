export async function getChatbotResponse(message: string): Promise<string> {
    const response = await fetch('https://customer-support-api.vercel.app/api/v1/customer-support', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: message }),
    })
    const data = await response.json()
    return data.response
}
