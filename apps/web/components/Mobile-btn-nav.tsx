"use client"

import { Search, MapPin, Heart, MessageCircle, User } from "lucide-react"

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex items-center justify-around py-3">
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary">
          <Search size={24} />
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary">
          <MapPin size={24} />
          <span className="text-xs">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary">
          <Heart size={24} />
          <span className="text-xs">Saved</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary">
          <MessageCircle size={24} />
          <span className="text-xs">Chats</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary">
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  )
}