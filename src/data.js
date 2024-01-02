import featuresvg1 from './assets/featuresvg1.svg'
import featuresvg2 from './assets/featuresvg2.svg'
import featuresvg3 from './assets/featuresvg3.svg'
import featuresvg4 from './assets/featuresvg4.svg'
import featuresvg5 from './assets/featuresvg5.svg'
import featuresvg6 from './assets/featuresvg6.svg'
import blog_image_1 from './assets/images/blog image 1.png'
import blog_image_2 from './assets/images/blog image 2.png'
import blog_image_3 from './assets/images/blog image 3.png'
import blog_image_4 from './assets/images/blog image 4.png'
import blog_avatar_1 from './assets/images/blog avatar 1.png'
import blog_avatar_2 from './assets/images/blog avatar 2.png'
import blog_avatar_3 from './assets/images/blog avatar 3.png'
import blog_avatar_4 from './assets/images/blog avatar 4.png'
import testimonial_image_1 from './assets/images/testimonial image 1.png'
import testimonial_image_2 from './assets/images/testimonial image 2.png'
import testimonial_image_3 from './assets/images/testimonial image 3.png'


export const features = [
    {
        svg: `${featuresvg1}`,
        title: 'Personalized Nutrition Plans',
        content: 'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.'
    },
    {
        svg: `${featuresvg2}`,
        title: 'Guidance from Certified Nutritionists',
        content: 'Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.'
    },
    {
        svg: `${featuresvg3}`,
        title: 'Food Tracking and Analysis',
        content: 'Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.'
    },
    {
        svg: `${featuresvg4}`,
        title: 'Meal Planning and Recipes',
        content: 'Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.'
    },
    {
        svg: `${featuresvg5}`,
        title: 'Lifestyle and Behavior Coaching',
        content: 'Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.'
    },
    {
        svg: `${featuresvg6}`,
        title: 'Nutritional Education and Workshops',
        content: 'Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.'
    },
]

export const blog = [
    {
        top: {
            image: `${blog_image_1}`,
            text: 'Weight Loss',
            heading: 'The Benefits of Hydration for Weight Loss',
            paragraph: 'Discover how staying hydrated can support your weight loss goals and improve overall health.',

        },
        bottom: {
            avatar: `${blog_avatar_1}`,
            namee: 'Emily Johnson',
            date: '23 May 2023 - 5 min read'
        }

    },
    {
        top: {
            image: `${blog_image_2}`,
            text: 'Mindful Eating',
            heading: 'Cultivating a Healthy Relationship with Food',
            paragraph: 'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',

        },
        bottom: {
            avatar: `${blog_avatar_2}`,
            namee: 'Sarah Thompson',
            date: '23 May 2023 - 5 min read'
        }

    },
    {
        top: {
            image: `${blog_image_3}`,
            text: 'Understanding Macronutrients',
            heading: 'Carbohydrates, Proteins, and Fats',
            paragraph: 'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',

        },
        bottom: {
            avatar: `${blog_avatar_3}`,
            namee: 'Mark Wilson',
            date: '23 May 2023 - 5 min read'
        }

    },
    {
        top: {
            image: `${blog_image_4}`,
            text: 'Healthy Snacks on the Go',
            heading: 'Quick and Nutritious Options',
            paragraph: 'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',

        },
        bottom: {
            avatar: `${blog_avatar_4}`,
            namee: 'Emily Johnson',
            date: '23 May 2023 - 5 min read'
        }

    },
] 

export const testimonials = [
    {
        paragraph: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
        image: `${testimonial_image_1}`,
        namee: 'Jennifer Anderson'
    },
    {
        paragraph: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
        image: `${testimonial_image_2}`,
        namee: 'Robert Johnson'
    },
    {
        paragraph: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
        image: `${testimonial_image_3}`,
        namee: 'Emily Davis'
    },
]

export const pricing = [
    {
        plan: 'Basic Plan',
        discount: 'Up to 50% off on Yearly Plan',
        paragraph: 'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.',
        price: '$49',
    },
    {
        plan: 'Premium Plan',
        discount: 'Up to 50% off on Yearly Plan',
        paragraph: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
        price: '$79',
    },
    {
        plan: 'Ultimate Plan',
        discount: 'Up to 50% off on Yearly Plan',
        paragraph: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
        price: '$99',
    },
]