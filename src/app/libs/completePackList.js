const packListItems = {
  essentials: [
    "Backpack",
    "Boarding pass",
    "Cash",
    "Credit and debit cards",
    "Driver’s license",
    "ID",
    "Keys",
    "Money belt",
    "Passport",
    "Photocopies of documents",
    "Purse",
    "Tickets",
    "Vaccination certificate",
    "Visa",
    "Wallet",
  ],
  accessories: [
    "Bag",
    "Beach bag",
    "Belt",
    "Bracelets",
    "Earrings",
    "Glasses",
    "Hair ties",
    "Hat",
    "Headbands",
    "Hoop earrings",
    "Jewelry",
    "Necklaces",
    "Rings",
    "Scarves",
    "Sunglasses",
    "Watch",
  ],
  baby: [
    "Bassinet",
    "Beanie",
    "Bib",
    "Blanket",
    "Bottles",
    "Car seat",
    "Clothes",
    "Diaper bag",
    "Diaper cream",
    "Diapers",
    "Food",
    "Formula",
    "Hat",
    "High chair",
    "Lotion",
    "Nappies",
    "Nappy bag",
    "Nappy cream",
    "Outfits",
    "Pacifier",
    "Pajamas",
    "Shoes",
    "Sippy cup",
    "Snacks",
    "Socks",
    "Stroller",
    "Towel",
    "Toys",
    "Tylenol",
    "Wipes",
  ],
  backpack: [
    "Blanket",
    "Book",
    "Camera",
    "Candy",
    "Chapstick",
    "Charger",
    "Earbuds",
    "Glasses",
    "Gum",
    "Hand sanitizer",
    "Headphones",
    "iPad",
    "iPhone Charger",
    "Kindle",
    "Laptop",
    "Lip balm",
    "Lotion",
    "Money",
    "Notebook",
    "Passport",
    "Pen",
    "Phone",
    "Phone Charger",
    "Pillow",
    "Portable charger",
    "Snacks",
    "Sunglasses",
    "Sunscreen",
    "Tissues",
    "Wallet",
    "Water bottle",
  ],
  beach: [
    "Bathing suit",
    "Beach bag",
    "Beach towel",
    "Bikini",
    "Book",
    "Flip Flops",
    "Goggles",
    "Hat",
    "Sunglasses",
    "Sunscreen",
    "Swimsuit",
    "Towel",
  ],
  biking: [
    "Allen keys",
    "Bike lock",
    "Bike shoes",
    "Bike shorts",
    "Bike t-shirt",
    "Brake inner cable",
    "Brake pads",
    "Cleats",
    "Gear inner cable",
    "Gloves",
    "Helmet",
    "Patch kit",
    "Pump",
    "Rear belt",
    "Rim tape",
    "Scarf",
    "Spare tire",
    "Spokes",
    "Sunglasses",
    "Timing belt",
    "Tubes",
    "Valve adapter",
  ],
  camping: [
    "Air bed",
    "Blanket",
    "Boots",
    "Chairs",
    "Firewood",
    "Fuel",
    "Hammer",
    "Headlamp",
    "Ice",
    "Kettle",
    "Knife",
    "Matches",
    "Pillow",
    "Rope",
    "Sleeping bag",
    "Stove",
    "Table",
    "Tent",
    "Toiletries",
    "Torch",
    "Towel",
    "Water container",
  ],
  clothing: [
    "Bathing suit",
    "Belt",
    "Boots",
    "Bras",
    "Coat",
    "Dress",
    "Dress shoes",
    "Flip flops",
    "Gloves",
    "Hat",
    "Heels",
    "Hoodie",
    "Jacket",
    "Jeans",
    "Jumper",
    "Knickers",
    "Leggings",
    "Pajamas / PJs",
    "Panties",
    "Pants",
    "Rain Jacket",
    "Sandals",
    "Scarf",
    "Shirt",
    "Shoes",
    "Shorts",
    "Skirt",
    "Slippers",
    "Sneakers",
    "Socks",
    "Sweater",
    "Sweatshirt",
    "Swimsuit",
    "Swimwear",
    "T-shirt",
    "Tank top",
    "Tennis shoes",
    "Top",
    "Trainers",
    "Trousers",
    "Underwear",
  ],
  electronics: [
    "Camera",
    "Camera charger",
    "Headphones",
    "iPad",
    "iPad charger",
    "iPhone",
    "iPhone charger",
    "Kindle",
    "Kindle charger",
    "Power bank",
    "Sim ejector tool",
    "Smartphone",
    "Smartphone charger",
    "Speaker",
    "Tablet",
    "Travel adapter",
    "Watch",
    "Watch charger",
  ],
  food: [
    "Apples",
    "Bacon",
    "Beans",
    "Beer",
    "Bread",
    "Buns",
    "Butter",
    "Cereal",
    "Cheese",
    "Chips",
    "Coffee",
    "Cookies",
    "Crackers",
    "Eggs",
    "Fruit",
    "Granola bars",
    "Gum",
    "Honey",
    "Hot dogs",
    "Ice",
    "Juice",
    "Ketchup",
    "Lettuce",
    "Mayo",
    "Milk",
    "Mustard",
    "Nuts",
    "Peanut butter",
    "Protein bars",
    "Rice",
    "Rolls",
    "Salsa",
    "Snacks",
    "Sugar",
    "Tea",
    "Trail mix",
    "Water",
    "Wine",
    "Yogurt",
  ],
  gym: [
    "Gym shoes",
    "Gym shorts",
    "Gym socks",
    "Gym towel",
    "Gym t-shirt",
    "Headphones",
    "Music player",
    "Sports bra",
    "Water bottle",
  ],
  healthcare: [
    "Allergy medicine",
    "Antibiotics",
    "Antihistamine",
    "Band aids / plasters",
    "Benadryl",
    "Birth control",
    "Condoms",
    "Diarrhea medication",
    "Dramamine",
    "Eye drops",
    "First Aid Kit",
    "Headache pills",
    "Ibuprofen / Advil",
    "Loperamide / Imodium",
    "Inhalers",
    "Nasal spray",
    "Pain relief pills",
    "Paracetamol / Tylenol",
    "Pepto",
    "Plasters",
    "Prescription medications",
    "Vitamins",
  ],
  hiking: [
    "Bug spray",
    "Compass",
    "First aid kit",
    "GPS",
    "Hat",
    "Headphones",
    "Hiking shoes",
    "Hiking socks",
    "Hiking shorts",
    "Hiking t-shirt",
    "Music Player",
    "Sports bra",
    "Sunglasses",
    "Sunscreen",
    "Water bottle",
  ],
  kitchen: [
    "Bin bags",
    "Bottle opener",
    "Bowls",
    "Can opener",
    "Chopping board",
    "Cling film",
    "Colander",
    "Cooking utensils",
    "Cups",
    "Cutlery",
    "Dish soap",
    "Foil",
    "Frying pan",
    "Glasses",
    "Grater",
    "Knife sharpener",
    "Knives",
    "Measuring cups",
    "Measuring jug",
    "Microwave",
    "Mixing bowls",
    "Mugs",
    "Napkins",
    "Paper towels",
    "Plates",
    "Sandwich bags",
    "Silverware",
    "Spatula",
    "Sponges",
    "Toaster",
    "Tongs",
    "Towels",
    "Trash can",
    "Tupperware",
    "Vegetable peeler",
    "Whisk",
  ],
  makeup: [
  "Beauty blender",
  "Blush",
  "Blush brush",
  "Bronzer",
  "Brow pencil",
  "Brushes",
  "Chapstick",
  "Concealer",
  "Contour brush",
  "Eyebrow gel",
  "Eyebrow pencil",
  "Eyelash curler",
  "Eyelash glue",
  "Eyeliner",
  "Eyeshadow",
  "Foundation",
  "Highlight",
  "Highlight brush",
  "Highlighter",
  "Lip balm",
  "Lip gloss",
  "Lip liner",
  "Lipstick",
  "Mascara",
  "Moisturizer",
  "Perfume",
  "Powder",
  "Powder brush",
  "Primer",
  "Setting spray",
  "Sponge",
  "Tweezers",
],
photography: [
  "Batteries",
  "Battery charger",
  "Camera",
  "Camera bag",
  "Camera charger",
  "External Hard Drive",
  "Filters",
  "Lenses",
  "Main bodies",
  "Memory cards",
  "Monopod",
  "Tripod",
],
running: [
  "Arm band",
  "Buff",
  "Camelback",
  "Headphones",
  "Headlamp",
  "Music player",
  "Running socks",
  "Running shoes",
  "Running shorts",
  "Running t-shirt",
  "Sports bra",
  "Sunglasses",
  "Water bottle",
  "Watch",
],
shoes: [
  "Black boots",
  "Black flats",
  "Black sandals",
  "Boots",
  "Dress shoes",
  "Flats",
  "Flip flops",
  "Gym shoes",
  "Heels",
  "Rainbows",
  "Running shoes",
  "Sandals",
  "Shoes",
  "Slippers",
  "Sneakers",
  "Tennis shoes",
  "Trainers",
  "Walking shoes",
  "Water shoes",
  "Wedges",
],
snow: [
  "Base layers",
  "Beacon",
  "Buff",
  "Camelback",
  "Gear",
  "Goggles",
  "Helmet",
  "Inclinometer",
  "Lip protection",
  "Long underwear",
  "Neck warmer",
  "Polar",
  "Scarf",
  "Shovel",
  "Ski/snow gloves",
  "Ski/snow hat",
  "Ski/snow jacket",
  "Ski/snow pants",
  "Ski/snow socks",
  "Sports bra",
  "Sunglasses",
  "Sunscreen",
],
swimming: [
  "Ear plugs",
  "Flip flops",
  "Fins",
  "Goggles",
  "Kickboard",
  "Pull buoy",
  "Swim cap",
  "Swimsuit",
  "Swimsuit coverup",
  "Swimwear",
  "Timer",
],
toiletries: [
  "Body lotion",
  "Body wash",
  "Brush",
  "Comb",
  "Conditioner",
  "Contacts",
  "Deodorant",
  "Dry shampoo",
  "Face wash",
  "Floss",
  "Glasses",
  "Hair brush",
  "Hair ties",
  "Hairspray",
  "Lotion",
  "Moisturizer",
  "Nail clipper",
  "Nail file",
  "Pads",
  "Perfume",
  "Razor",
  "Shampoo",
  "Shaving cream",
  "Shower gel",
  "Soap",
  "Sunscreen",
  "Tampons",
  "Toner",
  "Toothbrush",
  "Toothpaste",
  "Towel",
  "Tweezers",
],
work: [
  "Business cards",
  "Keyfob",
  "Laptop",
  "Laptop charger",
  "Smartphone",
  "Smartphone charger",
  ]
};


export default packListItems;