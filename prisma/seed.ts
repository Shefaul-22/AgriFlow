import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {


  await prisma.product.createMany({
    data: [
      {
        name: "Organic Tomato",
        category: "Vegetable",
        price: 60,
        unit: "kg",
        location: "Sylhet",
        seller: "Karim Mia",

        image:
          "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=500&auto=format&fit=crop",

        description:
          "Fresh organic tomatoes collected directly from local farms in Sylhet. These tomatoes are naturally grown without harmful chemicals and are rich in vitamins and antioxidants.",

        stock: 120,

        delivery:
          "Delivery available within 2-3 days all over Bangladesh.",

        quality:
          "100% Organic & Fresh",
      },

      {
        name: "Fresh Cauliflower",
        category: "Vegetable",
        price: 40,
        unit: "piece",
        location: "Bogura",
        seller: "Rahim Sheikh",

        image:
          "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?q=80&w=500&auto=format&fit=crop",

        description:
          "Farm fresh cauliflower directly harvested from Bogura farms. Perfect for healthy meals and daily cooking.",

        stock: 80,

        delivery:
          "Home delivery available within 48 hours.",

        quality:
          "Premium Farm Quality",
      },

      {
        name: "Sweet Pumpkin",
        category: "Vegetable",
        price: 30,
        unit: "kg",
        location: "Jashore",
        seller: "Arif Hossain",

        image:
          "https://images.unsplash.com/photo-1506504093444-245f7823555c?q=80&w=500&auto=format&fit=crop",

        description:
          "Naturally sweet pumpkins sourced from trusted farmers. Rich in nutrients and perfect for soups and curries.",

        stock: 95,

        delivery:
          "Fast delivery service available nationwide.",

        quality:
          "Fresh & Naturally Grown",
      },

      {
        name: "Green Chili",
        category: "Vegetable",
        price: 120,
        unit: "kg",
        location: "Rangpur",
        seller: "Jasim Uddin",

        image:
          "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=500&auto=format&fit=crop",

        description:
          "Spicy and fresh green chilies collected directly from local farms. Ideal for adding extra flavor to dishes.",

        stock: 70,

        delivery:
          "Quick delivery available in all districts.",

        quality:
          "Chemical-Free Fresh Product",
      },

      {
        name: "Himsagar Mango",
        category: "Fruit",
        price: 150,
        unit: "kg",
        location: "Rajshahi",
        seller: "Abdur Rob",

        image:
          "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=500&auto=format&fit=crop",

        description:
          "Authentic Himsagar mangoes from Rajshahi. Sweet, juicy, and highly popular during summer season.",

        stock: 150,

        delivery:
          "Fresh mango delivery within 24-72 hours.",

        quality:
          "Premium Export Quality",
      },

      {
        name: "Lychee (Bombay)",
        category: "Fruit",
        price: 400,
        unit: "100 pcs",
        location: "Dinajpur",
        seller: "Sagor Ali",

        image:
          "https://images.unsplash.com/photo-1610450519764-aba3d03ed9a6?q=80&w=500&auto=format&fit=crop",

        description:
          "Sweet and juicy Bombay lychees freshly harvested from Dinajpur gardens.",

        stock: 60,

        delivery:
          "Express fruit delivery available.",

        quality:
          "Fresh Garden Collection",
      },

      {
        name: "Sabri Banana",
        category: "Fruit",
        price: 80,
        unit: "dozen",
        location: "Narsingdi",
        seller: "Sumon Mia",

        image:
          "https://images.unsplash.com/photo-1574226516831-e1dff420e12b?q=80&w=500&auto=format&fit=crop",

        description:
          "Naturally ripened Sabri bananas rich in potassium and energy.",

        stock: 110,

        delivery:
          "Safe and fast delivery available.",

        quality:
          "Naturally Ripened",
      },

      {
        name: "Red Malta",
        category: "Fruit",
        price: 220,
        unit: "kg",
        location: "Sylhet",
        seller: "Faruk Ahmed",

        image:
          "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=500&auto=format&fit=crop",

        description:
          "Fresh and juicy Sylheti Red Malta full of vitamin C and refreshing taste.",

        stock: 85,

        delivery:
          "Available for nationwide delivery.",

        quality:
          "Premium Citrus Quality",
      },

      {
        name: "Nazirshail Rice",
        category: "Grain",
        price: 75,
        unit: "kg",
        location: "Naogaon",
        seller: "Motaleb Ali",

        image:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500&auto=format&fit=crop",

        description:
          "High-quality Nazirshail rice known for its aroma and delicious taste.",

        stock: 300,

        delivery:
          "Bulk order delivery available.",

        quality:
          "Premium Rice Quality",
      },

      {
        name: "Red Flour",
        category: "Grain",
        price: 55,
        unit: "kg",
        location: "Kushtia",
        seller: "Mokbul Hossain",

        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500&auto=format&fit=crop",

        description:
          "Freshly processed red flour packed with nutrients and ideal for healthy meals.",

        stock: 140,

        delivery:
          "Nationwide home delivery available.",

        quality:
          "Freshly Processed",
      },

      {
        name: "Lentils (Masoor Dal)",
        category: "Grain",
        price: 130,
        unit: "kg",
        location: "Faridpur",
        seller: "Habib Bhai",

        image:
          "https://images.unsplash.com/photo-1545114197-013145464161?q=80&w=500&auto=format&fit=crop",

        description:
          "Premium quality Masoor Dal rich in protein and perfect for daily meals.",

        stock: 200,

        delivery:
          "Quick and safe delivery available.",

        quality:
          "Best Market Quality",
      },

      {
        name: "Mustard Seeds",
        category: "Grain",
        price: 90,
        unit: "kg",
        location: "Pabna",
        seller: "Aslam Sheikh",

        image:
          "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?q=80&w=500&auto=format&fit=crop",

        description:
          "Natural mustard seeds collected from local farms and ideal for oil production and cooking.",

        stock: 160,

        delivery:
          "Delivery available across the country.",

        quality:
          "Pure & Natural",
      },
    ],
  });

  console.log("✅ Products Seeded Successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });