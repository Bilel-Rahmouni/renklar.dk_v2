import React from "react";

function getCurrentOfferLabelAndEmoji() {
  const now = new Date();
  const year = now.getFullYear();
  const inRange = (start, end) => now >= start && now <= end;
  function getEasterDate(y) {
    const f = Math.floor,
      G = y % 19,
      C = f(y / 100),
      H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
      I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
      J = (y + f(y / 4) + I + 2 - C + f(C / 4)) % 7,
      L = I - J,
      month = 3 + f((L + 40) / 44),
      day = L + 28 - 31 * f(month / 4);
    return new Date(y, month - 1, day);
  }
  const holidays = [
    {
      label: "Jule-tilbud",
      emoji: "🎄",
      start: new Date(year, 11, 15),
      end: new Date(year + 1, 0, 5),
      gradient: "from-[#7F9CF5] via-[#B2F7EF] to-[#F7CAC9]"
    },
    {
      label: "Påske-tilbud",
      emoji: "🐣",
      start: (() => { const easter = getEasterDate(year); const start = new Date(easter); start.setDate(easter.getDate() - 7); return start; })(),
      end: (() => { const easter = getEasterDate(year); const end = new Date(easter); end.setDate(easter.getDate() + 2); return end; })(),
      gradient: "from-yellow-200 via-yellow-100 to-pink-200"
    },
    {
      label: "Sommer-tilbud",
      emoji: "☀️",
      start: new Date(year, 5, 15),
      end: new Date(year, 7, 31),
      gradient: "from-[#63baf8] via-[#f7e987] to-[#f7cac9]"
    },
    {
      label: "Tilbage til skole-tilbud",
      emoji: "🎒",
      start: new Date(year, 7, 1),
      end: new Date(year, 8, 10),
      gradient: "from-[#b2f7ef] via-[#f7cac9] to-[#7f9cf5]"
    },
    {
      label: "Vinter-tilbud",
      emoji: "❄️",
      start: new Date(year, 0, 6),
      end: new Date(year, 2, 15),
      gradient: "from-blue-200 via-blue-100 to-white"
    },
  ];
  for (const h of holidays) {
    if (inRange(h.start, h.end)) return h;
  }
  return { label: "Sæson-tilbud", emoji: "✨", gradient: "from-blue-100 via-white to-blue-200" };
}

function OfferHeader() {
  const { label, emoji, gradient } = getCurrentOfferLabelAndEmoji();
  return (
    <div className="fixed top-16 left-0 w-full z-50 flex justify-center items-center pointer-events-none select-none">
      <div className={`w-full mt-4 px-0 py-2 rounded-xl shadow-lg bg-white backdrop-blur-md
       border border-blue-100 flex flex-row items-center gap-2 pointer-events-auto
       transition-all duration-300 `}
        style={{boxShadow: '0 4px 16px 0 rgba(31,38,135,0.10)'}}>
        {/* <span className="text-xl md:text-2xl lg:text-3xl mr-1 drop-shadow-sm">{emoji}</span> */}
        <span className="flex-1 text-center">
          <span className="block text-sm md:text-base lg:text-lg font-bold text-blue-600 drop-shadow-sm">
            {label}: <span className="font-extrabold text-blue-600">Få 15% rabat på din første rengøring</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default OfferHeader;
