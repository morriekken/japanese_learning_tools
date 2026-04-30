// ═══════════════════════════════════════════════════════════════
//  カタカナ · Katakana Patterns — DATA FILE
//  Edit this file to add, remove, or reorganise clusters.
//  The main tool file (katakana-patterns.html) reads from here.
//
//  Each cluster:
//    id       → unique string (no spaces)
//    title    → heading shown in the cluster card
//    subtitle → short description
//    theme    → accent colour for the badge and kana glyphs
//    kana     → array of kana objects
//    diff     → HTML string explaining the visual differences
//
//  Each kana:
//    k        → the katakana character
//    r        → romanisation
//    mnemonic → memory aid shown below the character
//    examples → array of { k, r, e } word examples
// ═══════════════════════════════════════════════════════════════

const clusters = [
  {
    id: 'c0',
    title: 'The Great Confusion: シ ツ ソ ン',
    subtitle: 'The #1 cause of nightmares for Katakana learners',
    theme: '#e63946',
    kana: [
      {
        k:'シ', r:'shi',
        mnemonic:'😁 A smiley face sideways — the dots are EYES at the TOP, the curve is a SMILE going right. "SHEe!" grins the face.',
        examples:[{k:'シャツ',r:'shatsu',e:'Shirt'},{k:'シネマ',r:'sinema',e:'Cinema'},{k:'シリアル',r:'shirīaru',e:'Cereal'}]
      },
      {
        k:'ツ', r:'tsu',
        mnemonic:'😬 Also a face, but the dots are at the BOTTOM like a CHIN, and the curve goes DOWN. "TSU-nami" sweeps up from below.',
        examples:[{k:'ツアー',r:'tsuā',e:'Tour'},{k:'ツール',r:'tsūru',e:'Tool'}]
      },
      {
        k:'ソ', r:'so',
        mnemonic:'Just ONE dot + a slash going down-right. Like a "SO what" shrug — one shoulder, one arm drop. Very casual.',
        examples:[{k:'ソファ',r:'sofa',e:'Sofa'},{k:'ソース',r:'sōsu',e:'Sauce'}]
      },
      {
        k:'ン', r:'n',
        mnemonic:'Also one dot + slash, BUT the slash curves differently — it bends MORE and points left-down. The lone wolf "N." It ends words.',
        examples:[{k:'ランチ',r:'ranchi',e:'Lunch'},{k:'パン',r:'pan',e:'Bread'}]
      }
    ],
    diff: `<strong>シ vs ツ</strong> — Both have 2 dots + a curve. Key: シ's dots are on the <span class="tip">LEFT side (like eyes)</span>, ツ's dots are on the <span class="tip">BOTTOM (like a chin)</span>. シ curves sideways. ツ curves downward.<br><br><strong>ソ vs ン</strong> — Both have 1 dot + a stroke. Key: ソ's stroke goes <span class="tip">diagonally down-right</span> like a swift slash. ン's stroke <span class="tip">curves and bends back left</span> like a hook. If it hooks — it's ン.`
  },

  {
    id: 'c1',
    title: 'Box Family: ロ コ ア',
    subtitle: 'Squared-off shapes that share geometric DNA',
    theme: '#457b9d',
    kana: [
      {
        k:'ロ', r:'ro',
        mnemonic:'🟥 A perfect square/rectangle — a RObot\'s face. "RO-BOT." It\'s literally just a box.',
        examples:[{k:'ロボット',r:'robotto',e:'Robot'},{k:'ロシア',r:'Roshia',e:'Russia'},{k:'ロック',r:'rokku',e:'Rock'}]
      },
      {
        k:'コ', r:'ko',
        mnemonic:'📐 A C-shape or bracket — RObot\'s box friend that had the right wall removed. "CO-me in!" through the open side.',
        examples:[{k:'コーヒー',r:'kōhī',e:'Coffee'},{k:'コート',r:'kōto',e:'Coat'},{k:'コップ',r:'koppu',e:'Cup'}]
      },
      {
        k:'ア', r:'a',
        mnemonic:'🏗️ Like an "A" or scaffold — a crossbar with legs. The top crossbar is the same as コ, but with a leg hanging off.',
        examples:[{k:'アイス',r:'aisu',e:'Ice Cream'},{k:'アニメ',r:'anime',e:'Anime'},{k:'アメリカ',r:'Amerika',e:'America'}]
      }
    ],
    diff: `<strong>ロ vs コ</strong> — ロ is <span class="tip">closed on all sides</span> (full box). コ is <span class="tip">open on the right</span> (C-shape). Easy: does it close? → ロ. Does it stay open? → コ.<br><br><strong>ア relation</strong> — ア shares コ's top shape but adds a diagonal leg going down-right. Think: コ grew a leg and became ア.`
  },

  {
    id: 'c2',
    title: 'Mirror Faces: ク タ ヤ カ',
    subtitle: 'Diagonal stroke family — all about which way they lean',
    theme: '#2a9d8f',
    kana: [
      {
        k:'ク', r:'ku',
        mnemonic:'🐦 A bird\'s open beak pointing left — goes "KOO KOO" like a confused pigeon.',
        examples:[{k:'クラス',r:'kurasu',e:'Class'},{k:'クリスマス',r:'Kurisumasu',e:'Christmas'}]
      },
      {
        k:'タ', r:'ta',
        mnemonic:'🌴 A palm tree blown sideways — top crossbar + diagonal going right. "TA-DA!" as you arrive at the beach.',
        examples:[{k:'タクシー',r:'takushī',e:'Taxi'},{k:'タワー',r:'tawā',e:'Tower'}]
      },
      {
        k:'ヤ', r:'ya',
        mnemonic:'🤙 A diagonal sweep with a small hook — like a "hang loose" hand signal. "YAAAH!" surfer energy.',
        examples:[{k:'ヤード',r:'yādo',e:'Yard'},{k:'ヤング',r:'yangu',e:'Young'}]
      },
      {
        k:'カ', r:'ka',
        mnemonic:'🔪 A vertical line with a left-facing sweep — a blade cutting. "KAH!" goes the chop.',
        examples:[{k:'カフェ',r:'kafe',e:'Cafe'},{k:'カメラ',r:'kamera',e:'Camera'},{k:'カード',r:'kādo',e:'Card'}]
      }
    ],
    diff: `<strong>ク vs タ</strong> — ク has a <span class="tip">top curve going left</span> with one diagonal. タ has a <span class="tip">top horizontal bar</span> + diagonal going right + a second small stroke.<br><br><strong>ヤ vs カ</strong> — Both have a vertical + a crossing stroke. ヤ's crossing stroke <span class="tip">hooks upward</span>. カ's crossing stroke <span class="tip">sweeps left and down</span> like a blade.`
  },

  {
    id: 'c3',
    title: 'Hook Gang: フ ワ ヲ',
    subtitle: 'The top-heavy curved hook family',
    theme: '#9b5de5',
    kana: [
      {
        k:'フ', r:'fu',
        mnemonic:'🪝 A hook on a wall — "FU" as in "FOO-l me twice." One single curved stroke from the top.',
        examples:[{k:'フルーツ',r:'furūtsu',e:'Fruit'},{k:'フランス',r:'Furansu',e:'France'},{k:'フォーク',r:'fōku',e:'Fork'}]
      },
      {
        k:'ワ', r:'wa',
        mnemonic:'🪣 フ\'s bucket cousin — has a vertical line hanging down the right side like a bucket handle. "WAH!" it splashes.',
        examples:[{k:'ワイン',r:'wain',e:'Wine'},{k:'ワールド',r:'wārudo',e:'World'}]
      },
      {
        k:'ヲ', r:'wo',
        mnemonic:'🎭 ワ\'s dramatic sibling — has an EXTRA horizontal stroke at the top. Almost never used in modern Japanese (grammar only). The diva of Katakana.',
        examples:[{k:'(grammatical only)',r:'wo',e:'Object marker'}]
      }
    ],
    diff: `<strong>フ vs ワ</strong> — フ is just the <span class="tip">top curved hook alone</span>. ワ adds a <span class="tip">vertical stroke hanging from the right</span> end of the hook, making it look like a bucket.<br><br><strong>ワ vs ヲ</strong> — ヲ = ワ + <span class="tip">an extra horizontal bar at the very top</span>. Luckily ヲ is so rare you can almost ignore it.`
  },

  {
    id: 'c4',
    title: 'Lightning Strikes: レ ソ ノ',
    subtitle: 'Simple single-stroke slash characters',
    theme: '#f4a261',
    kana: [
      {
        k:'レ', r:'re',
        mnemonic:'↩️ A stroke that goes down then hooks right — a boomerang returning. "RE-turn to sender." The hook is the turn.',
        examples:[{k:'レストラン',r:'resutoran',e:'Restaurant'},{k:'レモン',r:'remon',e:'Lemon'},{k:'レベル',r:'reberu',e:'Level'}]
      },
      {
        k:'ソ', r:'so',
        mnemonic:'One dot + a diagonal slash going down-right. Think of it as a "SO" quick it left skid marks. No hook, just a clean slash.',
        examples:[{k:'ソファ',r:'sofa',e:'Sofa'},{k:'ソース',r:'sōsu',e:'Sauce'}]
      },
      {
        k:'ノ', r:'no',
        mnemonic:'↗️ The simplest character — just one diagonal stroke going from bottom-left to top-right. Like a "NO ENTRY" slash.',
        examples:[{k:'ノート',r:'nōto',e:'Notebook'},{k:'ノルウェー',r:'Noruwē',e:'Norway'}]
      }
    ],
    diff: `<strong>ノ vs ソ</strong> — ノ is a <span class="tip">single clean diagonal</span>, no dot. ソ has <span class="tip">a dot ABOVE the diagonal</span>. Dot? → ソ. No dot? → ノ.<br><br><strong>レ vs the others</strong> — レ is unique: it goes <span class="tip">DOWN first then sharply hooks RIGHT</span> at the bottom. It's the only one that turns at the bottom rather than going straight through.`
  },

  {
    id: 'c5',
    title: 'T-Bar Twins: テ ナ ニ エ',
    subtitle: 'The horizontal crossbar architecture group',
    theme: '#e63946',
    kana: [
      {
        k:'テ', r:'te',
        mnemonic:'📺 A TV antenna — horizontal bar on top with three things hanging down. "TE-levision!" The middle stroke is longer.',
        examples:[{k:'テニス',r:'tenisu',e:'Tennis'},{k:'テスト',r:'tesuto',e:'Test'},{k:'テープ',r:'tēpu',e:'Tape'}]
      },
      {
        k:'ナ', r:'na',
        mnemonic:'✝️ A plus/cross sign with the right arm going diagonal — "NAH" to all your problems. Like a simple signpost.',
        examples:[{k:'ナイフ',r:'naifu',e:'Knife'},{k:'ナンバー',r:'nanbā',e:'Number'}]
      },
      {
        k:'ニ', r:'ni',
        mnemonic:'🟰 Two equal parallel lines — your two KNEES. Top line shorter, bottom line longer. "KNEE" → "ni".',
        examples:[{k:'ニュース',r:'nyūsu',e:'News'},{k:'ニンジャ',r:'ninja',e:'Ninja'}]
      },
      {
        k:'エ', r:'e',
        mnemonic:'🏗️ An H-beam or I-beam in construction — top bar, middle connector, bottom bar. A builder yells "HEY!" (= e).',
        examples:[{k:'エアコン',r:'eakon',e:'Air Con'},{k:'エレベーター',r:'erebētā',e:'Elevator'}]
      }
    ],
    diff: `<strong>テ vs エ</strong> — テ has a <span class="tip">top bar + downward strokes hanging below</span>. エ has <span class="tip">top bar + bottom bar + a middle connector</span> — it's symmetric top and bottom.<br><br><strong>ナ vs ニ</strong> — ナ is <span class="tip">one crossbar + a diagonal leg</span>. ニ is <span class="tip">two clean parallel horizontal lines</span>. No diagonals in ニ!`
  },

  {
    id: 'c6',
    title: 'Smiling Faces: ウ ラ チ',
    subtitle: 'Characters with curved top sections',
    theme: '#457b9d',
    kana: [
      {
        k:'ウ', r:'u',
        mnemonic:'👄 A small top dot + a horseshoe curve — lips puckered to say "OOH." The dot is your nose.',
        examples:[{k:'ウォーター',r:'wōtā',e:'Water'},{k:'ウイルス',r:'uirusu',e:'Virus'}]
      },
      {
        k:'ラ', r:'ra',
        mnemonic:'🎸 A curved top bar + a leg going diagonal-down — like a guitarist leaning back mid-solo. "RAAAH!" (guitar noise)',
        examples:[{k:'ラジオ',r:'rajio',e:'Radio'},{k:'ラーメン',r:'rāmen',e:'Ramen'},{k:'ランチ',r:'ranchi',e:'Lunch'}]
      },
      {
        k:'チ', r:'chi',
        mnemonic:'🎣 A horizontal bar + a curved hook below — a fishing rod and line. "CHEE!" shouts the fisher on a catch.',
        examples:[{k:'チョコレート',r:'chokoreeto',e:'Chocolate'},{k:'チーズ',r:'chīzu',e:'Cheese'},{k:'チケット',r:'chiketto',e:'Ticket'}]
      }
    ],
    diff: `<strong>ウ vs ラ</strong> — ウ has a <span class="tip">dot on top and a symmetrical U-curve</span>. ラ has a <span class="tip">flat top bar</span> (not a curve) then a diagonal leg going right-down. ラ leans; ウ is symmetric.<br><br><strong>チ vs ラ</strong> — Both have a top stroke + lower stroke. チ's lower part <span class="tip">curves like a fishing hook going left</span>. ラ's lower part <span class="tip">shoots diagonally right</span>.`
  },

  {
    id: 'c7',
    title: 'Smiley Dots: シ ツ ミ',
    subtitle: 'Three-dot characters — count and position everything',
    theme: '#2a9d8f',
    kana: [
      {
        k:'シ', r:'shi',
        mnemonic:'😁 Two dots on the LEFT + curve going right — a sideways smiley. Dots are EYES. "SHEe smiles right!"',
        examples:[{k:'シャツ',r:'shatsu',e:'Shirt'},{k:'シリアル',r:'shirīaru',e:'Cereal'}]
      },
      {
        k:'ツ', r:'tsu',
        mnemonic:'😬 Two dots on the BOTTOM + curve going down — a face grimacing downward. "TSU-nami comes FROM below!"',
        examples:[{k:'ツアー',r:'tsuā',e:'Tour'},{k:'ツール',r:'tsūru',e:'Tool'}]
      },
      {
        k:'ミ', r:'mi',
        mnemonic:'🎵 THREE horizontal strokes stacked — musical notes! "Do Re MI!" from The Sound of Music. Count: 1, 2, 3 lines.',
        examples:[{k:'ミルク',r:'miruku',e:'Milk'},{k:'ミュージック',r:'myūjikku',e:'Music'},{k:'ミス',r:'misu',e:'Miss/Mistake'}]
      }
    ],
    diff: `<strong>ミ vs シ/ツ</strong> — ミ has <span class="tip">3 horizontal lines stacked</span> — completely different structure, no dots. シ and ツ have dots + a single curved stroke.<br><br><strong>The シ/ツ trick one more time</strong> — Hold the page sideways. シ looks like <span class="tip">a face smiling to the RIGHT</span>. ツ looks like a face <span class="tip">smiling DOWNWARD</span>. The smile direction = the stroke direction.`
  },

  {
    id: 'c8',
    title: 'Tall Pillars: リ ル ト',
    subtitle: 'Vertical-dominant characters with branches',
    theme: '#9b5de5',
    kana: [
      {
        k:'リ', r:'ri',
        mnemonic:'🦵 Two vertical strokes side by side — legs walking. "RI-ght leg, left leg." The left leg is shorter.',
        examples:[{k:'リモコン',r:'rimokon',e:'Remote Control'},{k:'リスト',r:'risuto',e:'List'}]
      },
      {
        k:'ル', r:'ru',
        mnemonic:'🔱 A vertical with a diagonal branch at the bottom right — a trident or anchor. "RU-ler of the seas!"',
        examples:[{k:'ルール',r:'rūru',e:'Rule'},{k:'ルーム',r:'rūmu',e:'Room'}]
      },
      {
        k:'ト', r:'to',
        mnemonic:'🪤 A vertical line with a short horizontal dart sticking out to the right — like a nail sticking out. "TO-uch that nail!" OUCH.',
        examples:[{k:'トースト',r:'tōsuto',e:'Toast'},{k:'トイレ',r:'toire',e:'Toilet'},{k:'トマト',r:'tomato',e:'Tomato'}]
      }
    ],
    diff: `<strong>リ vs ル</strong> — リ has <span class="tip">two parallel vertical strokes</span> of slightly different heights. ル has <span class="tip">one vertical that swoops out diagonally at the bottom</span> — the base curves away like an anchor.<br><br><strong>ト vs both</strong> — ト has just <span class="tip">one vertical + one short horizontal poke to the right</span> midway up. Very distinctive once you see the "nail" shape.`
  },

  {
    id: 'c9',
    title: 'The Three Mustaches: マ ヤ ム',
    subtitle: 'Characters with that distinctive "mustache" top stroke',
    theme: '#f4a261',
    kana: [
      {
        k:'マ', r:'ma',
        mnemonic:'🪡 A horizontal top bar with a hanging diagonal + a curve below — like thread through a needle. "MA!" grandma shouts sewing your jeans.',
        examples:[{k:'マスク',r:'masuku',e:'Mask'},{k:'マクドナルド',r:'Makudonarudo',e:"McDonald's"}]
      },
      {
        k:'ヤ', r:'ya',
        mnemonic:'🤙 A diagonal sweep from top-left to bottom-right with a small hook — "hang loose." Like a laid-back "YAAAH."',
        examples:[{k:'ヤード',r:'yādo',e:'Yard'},{k:'ヤング',r:'yangu',e:'Young'}]
      },
      {
        k:'ム', r:'mu',
        mnemonic:'🐄 A curved top (like a moustache) + a diagonal + a bottom flick — like a cow\'s face. "MOO" = "mu". Look at it sideways and squint.',
        examples:[{k:'ムービー',r:'mūbī',e:'Movie'},{k:'ムード',r:'mūdo',e:'Mood'}]
      }
    ],
    diff: `<strong>マ vs ム</strong> — マ has a <span class="tip">flat horizontal top bar</span>. ム has a <span class="tip">curved/arched top</span> like a moustache or arch. Flat = マ, curved arch = ム.<br><br><strong>ヤ vs both</strong> — ヤ doesn't have the characteristic top bar at all — it starts with a <span class="tip">diagonal stroke from the top-left</span>. Much simpler — just two strokes.`
  },

  {
    id: 'c10',
    title: 'Cross Clan: ホ キ モ',
    subtitle: 'Characters built around a central vertical axis',
    theme: '#e63946',
    kana: [
      {
        k:'ホ', r:'ho',
        mnemonic:'⛪ A vertical line with TWO horizontal strokes crossing it + two bottom branches — like a church cross with a base. "HO-ly moly!"',
        examples:[{k:'ホテル',r:'hoteru',e:'Hotel'},{k:'ホームページ',r:'hōmupēji',e:'Homepage'}]
      },
      {
        k:'キ', r:'ki',
        mnemonic:'🗝️ A vertical with TWO horizontal bars + a small hook at bottom right — a fancy key shape. "KEY" → "ki."',
        examples:[{k:'キス',r:'kisu',e:'Kiss'},{k:'キャンプ',r:'kyanpu',e:'Camp'}]
      },
      {
        k:'モ', r:'mo',
        mnemonic:'🖊️ Two horizontal bars + a vertical + a bottom hook to the right — like ホ\'s simpler cousin. "MO-re strokes!" says the calligrapher.',
        examples:[{k:'モデル',r:'moderu',e:'Model'},{k:'モバイル',r:'mobairu',e:'Mobile'}]
      }
    ],
    diff: `<strong>キ vs モ</strong> — Both have 2 horizontal bars + a vertical. キ's vertical <span class="tip">goes ABOVE the top bar</span> and has a bottom-right hook. モ's vertical <span class="tip">sits between the two bars</span> — it doesn't poke out above.<br><br><strong>ホ vs キ</strong> — ホ has <span class="tip">two short diagonal strokes branching from the bottom</span> of the vertical (like a tree trunk). キ ends with a <span class="tip">single small right-hook</span>.`
  },

  {
    id: 'c11',
    title: 'Solo Acts: ヘ メ ネ ケ',
    subtitle: 'Characters that look like Latin letters in disguise',
    theme: '#457b9d',
    kana: [
      {
        k:'ヘ', r:'he',
        mnemonic:'⛰️ A mountain peak — one stroke up and one down, making an inverted V. Identical to hiragana へ! Climber shouts "HEY!" from the summit.',
        examples:[{k:'ヘルメット',r:'herumetto',e:'Helmet'},{k:'ヘアスタイル',r:'heasutairu',e:'Hairstyle'}]
      },
      {
        k:'メ', r:'me',
        mnemonic:'✖️ An X or cross shape — two diagonal strokes crossing. Your teacher marks it wrong: "MEH." Like ×.',
        examples:[{k:'メニュー',r:'menyū',e:'Menu'},{k:'メール',r:'mēru',e:'Email'},{k:'メロン',r:'meron',e:'Melon'}]
      },
      {
        k:'ネ', r:'ne',
        mnemonic:'🪢 Looks like a katakana ホ but with a diagonal branch at the bottom going LEFT — a knotted net. "NE-t."',
        examples:[{k:'ネクタイ',r:'nekutai',e:'Necktie'},{k:'ネット',r:'netto',e:'Net/Internet'}]
      },
      {
        k:'ケ', r:'ke',
        mnemonic:'🏗️ Like the letter F tipped sideways — a vertical with two horizontal branches going right, the top one longer. "KAY!"',
        examples:[{k:'ケーキ',r:'kēki',e:'Cake'},{k:'ケガ',r:'kega',e:'Injury'}]
      }
    ],
    diff: `<strong>ヘ vs メ</strong> — ヘ is a <span class="tip">mountain peak (Λ shape)</span>. メ is an <span class="tip">X shape</span>. Completely different — just similarly "simple."<br><br><strong>ネ vs ケ</strong> — ネ has a <span class="tip">vertical with two horizontal bars AND a diagonal bottom branch going left</span>. ケ has a <span class="tip">vertical with two right-going branches only</span>, no bottom diagonal.`
  },
];
