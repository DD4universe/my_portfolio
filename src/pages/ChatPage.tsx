import Navigation from "@/components/Navigation";
import PersonalChatAgent from "@/components/PersonalChatAgent";
import FloatingChatWidget from "@/components/FloatingChatWidget";

const ChatPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PersonalChatAgent />
      </main>
      <FloatingChatWidget />
      
      <footer className="py-8 px-4 border-t border-primary/20 glass-card">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Durai B. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;
