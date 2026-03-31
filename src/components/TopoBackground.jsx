function TopoBackground(){
    return (
        <svg
        className="topo-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M-100,100 Q100,50 300,150 T700,100 T1000,200" />
        <path d="M-100,150 Q120,80 320,180 T720,130 T1000,250" />
        <path d="M-100,200 Q140,110 340,210 T740,160 T1000,300" />
        <path d="M-100,250 Q160,140 360,240 T760,190 T1000,350" />
        <path d="M-100,300 Q180,170 380,270 T780,220 T1000,400" />
        <path d="M-100,350 Q200,200 400,300 T800,250 T1000,450" />
        <path d="M-100,400 Q220,230 420,330 T820,280 T1000,500" />
        <path d="M-100,450 Q240,260 440,360 T840,310 T1000,550" />
        <path d="M-100,500 Q260,290 460,390 T860,340 T1000,600" />
        <path d="M-100,550 Q280,320 480,420 T880,370 T1000,650" />
        <path d="M-100,600 Q300,350 500,450 T900,400 T1000,700" />
        <path d="M-100,650 Q320,380 520,480 T920,430 T1000,750" />

        {/* Concentric circles for peaks */}
        <circle cx="250" cy="250" r="20" />
        <circle cx="250" cy="250" r="40" />
        <circle cx="250" cy="250" r="60" />
        <circle cx="250" cy="250" r="80" />

        <circle cx="650" cy="550" r="30" />
        <circle cx="650" cy="550" r="60" />
        <circle cx="650" cy="550" r="90" />
        <circle cx="650" cy="550" r="120" />

        {/* More organic paths */}
        <path d="M100,-100 Q150,100 50,300 T100,700 T200,1000" />
        <path d="M150,-100 Q200,120 100,320 T150,720 T250,1000" />
        <path d="M200,-100 Q250,140 150,340 T200,740 T300,1000" />

        <path d="M700,-100 Q650,100 750,300 T700,700 T600,1000" />
        <path d="M750,-100 Q700,120 800,320 T750,720 T650,1000" />
        <path d="M800,-100 Q750,140 850,340 T800,740 T700,1000" />
      </svg>
    )
};

export default TopoBackground;