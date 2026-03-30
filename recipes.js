const CATEGORIES = [
  "ごはんもの",
  "麺類",
  "肉料理",
  "魚料理",
  "野菜おかず",
  "スープ",
  "卵・豆腐",
  "パン・軽食",
  "スイーツ",
  "作り置き"
];

const BASE_RECIPES = [
  { baseName: "やさしい和風カレー", cookTime: 30 },
  { baseName: "彩り野菜のトマトパスタ", cookTime: 20 },
  { baseName: "鶏むね肉のハニーマスタード焼き", cookTime: 25 },
  { baseName: "鮭ときのこのバター醤油ホイル焼き", cookTime: 25 },
  { baseName: "根菜たっぷりけんちん汁", cookTime: 35 },
  { baseName: "ふわとろ親子丼", cookTime: 15 },
  { baseName: "豆腐とひじきの和風サラダ", cookTime: 12 },
  { baseName: "厚切りトーストのクロックムッシュ", cookTime: 18 },
  { baseName: "しっとりかぼちゃプリン", cookTime: 40 },
  { baseName: "ごぼうとにんじんのきんぴら", cookTime: 15 }
];

const RECIPES = Array.from({ length: 100 }, (_, i) => {
  const base = BASE_RECIPES[i % BASE_RECIPES.length];
  const category = CATEGORIES[i % CATEGORIES.length];
  const id = i + 1;

  return {
    id,
    title: `${base.baseName} ${id}`,
    category,
    cookTime: base.cookTime + (i % 4) * 5,
    servings: `${2 + (i % 3)}人分`,
    image: `https://via.placeholder.com/720x480/F8D9B6/8B4A2D?text=Recipe+${id}`,
    description:
      "旬の食材を活かした、ほっとする味わいのレシピです。忙しい日でも作りやすい工程にまとめました。",
    ingredients: [
      "主材料 200g",
      "玉ねぎ 1/2個",
      "にんじん 1/3本",
      "調味料A 大さじ1",
      "調味料B 小さじ1",
      "オリーブオイル 小さじ2"
    ],
    steps: [
      "食材を食べやすい大きさに切ります。",
      "フライパンに油を熱し、香りが立つまで具材を炒めます。",
      "調味料を加えて中火で5〜10分煮込み、味をなじませます。",
      "器に盛り付け、お好みでハーブや黒こしょうを添えて完成です。"
    ],
    tags: ["時短", "家庭料理", "あったか"]
  };
});

window.RECIPES = RECIPES;
window.CATEGORIES = CATEGORIES;
