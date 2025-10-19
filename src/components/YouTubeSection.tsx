import { Youtube, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const YouTubeSection = () => {
  // Placeholder subscriber count - will be replaced with real API data later
  const subscriberCount = "1.2K";

  return (
    <section id="youtube" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Youtube className="h-8 w-8" />
              <span className="text-sm font-semibold tracking-wider uppercase">Join Our Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Follow Our Journey on YouTube
            </h2>
          </div>

          {/* Subscriber Counter */}
          <div className="flex flex-col items-center justify-center mb-12 animate-scale-in">
            <div className="bg-gradient-gold p-8 rounded-2xl shadow-glow">
              <div className="flex items-center gap-4">
                <Youtube className="h-12 w-12 text-primary-foreground" />
                <div>
                  <div className="text-4xl font-bold text-primary-foreground">{subscriberCount}</div>
                  <div className="text-sm text-primary-foreground/80 flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Subscribers
                  </div>
                </div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="mt-6 bg-[#FF0000] hover:bg-[#CC0000] text-white"
              onClick={() => window.open("https://youtube.com/@ayahmotionpictures", "_blank")}
            >
              <Youtube className="mr-2 h-5 w-5" />
              Subscribe Now
            </Button>
          </div>

          {/* Video Grid Placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-hero rounded-xl overflow-hidden border border-border group-hover:border-primary transition-all duration-300 shadow-elegant">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Youtube className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Latest Video {index}
                  </h4>
                  <p className="text-sm text-muted-foreground">Behind the scenes content</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
