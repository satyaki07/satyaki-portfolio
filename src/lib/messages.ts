// Simple in-memory storage for development
// In production, you'd use a database like MongoDB, PostgreSQL, etc.

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const messages: ContactMessage[] = [];

export function addMessage(data: { name: string; email: string; message: string }) {
  const message: ContactMessage = {
    id: Date.now().toString(),
    ...data,
    timestamp: new Date().toISOString(),
  };
  messages.push(message);
  return message;
}

export function getMessages(): ContactMessage[] {
  return messages.slice().reverse(); // Return newest first
}

export function deleteMessage(id: string): boolean {
  const index = messages.findIndex(msg => msg.id === id);
  if (index > -1) {
    messages.splice(index, 1);
    return true;
  }
  return false;
}
