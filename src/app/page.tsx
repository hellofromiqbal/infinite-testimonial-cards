'use client'

import { Box, Button, Paper, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useState, useEffect, useRef } from "react";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

interface Testimonial {
  testimonialUserImg: string;
  testimonialUserName: string;
  testimonialUserLocation: string;
  testimonialUserTestimony: string;
}

const testimonials = [
  {
    testimonialUserImg: "edTestimonialUser1",
    testimonialUserName: "Afiq",
    testimonialUserLocation: "Kelantan, Malaysia",
    testimonialUserTestimony: "Edbot’s user-friendly design, diverse courses, and rewarding system make learning more engaging. Earning points and exchanging them for rewards, such as program vouchers, motivates students to stay active and committed to their learning journey."
  },
  {
    testimonialUserImg: "edTestimonialUser2",
    testimonialUserName: "Afiqah",
    testimonialUserLocation: "Selangor, Malaysia",
    testimonialUserTestimony: "Edbot offers a variety of games that let me improve my English in multiple ways. Grammar quizzes, listening tests, reading comprehension, and more help me gain deeper knowledge and understanding on a profound level."
  },
  {
    testimonialUserImg: "edTestimonialUser3",
    testimonialUserName: "Aiman",
    testimonialUserLocation: "Selangor, Malaysia",
    testimonialUserTestimony: "As a student, finding effective study methods can be challenging, but Edbot.ai has completely transformed my learning experience. The platform’s AI-driven features offer personalized study plans that cater to my individual needs, making it easier to grasp difficult topics."
  },
  {
    testimonialUserImg: "edTestimonialUser4",
    testimonialUserName: "Ayuba Joida",
    testimonialUserLocation: "Gombe State, Nigeria",
    testimonialUserTestimony: "My experience with Edbot.ai is far more engaging than learning on Telegram. The platform allows me to learn at my own pace, without feeling rushed."
  },
  {
    testimonialUserImg: "edTestimonialUser5",
    testimonialUserName: "Musa Godman",
    testimonialUserLocation: "Nigeria, West Africa",
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  },
  {
    testimonialUserImg: "edTestimonialUser6",
    testimonialUserName: "Nurul Azizah",
    testimonialUserLocation: "Bekasi, Indonesia",
    testimonialUserTestimony: "Learning with Edbot.ai has been incredibly helpful for building my English foundation as a beginner. I love the repetition system—it makes practicing and memorizing so effective. Collecting diamonds and coins adds a fun challenge to the experience! My goal is to study abroad next year and take the TOEFL test, and Edbot is helping me work toward that dream. A huge thanks to Edbot, the community, and everyone involved for supporting my growth journey!"
  },
  {
    testimonialUserImg: "edTestimonialUser7",
    testimonialUserName: "Oktaviani Ndale",
    testimonialUserLocation: "Kupang, Indonesia",
    testimonialUserTestimony: "Senang sekali bisa belajar di Edbot.ai! Hal yang paling saya suka adalah pola soal yang repetitif, sangat membantu saya memahami materi dengan lebih baik. Ditambah lagi, koin di Edbot sekarang bisa ditukar hadiah dan jadi tiket untuk ikut speaking practice."
  },
  {
    testimonialUserImg: "edTestimonialUser8",
    testimonialUserName: "Sami Arti",
    testimonialUserLocation: "Tegal, Indonesia",
    testimonialUserTestimony: "The latest update on Edbot.ai is impressive! Its modern, intuitive design and upgraded features make learning more engaging and accessible. Clear explanations boost understanding, and the slow mode for listening and speaking is perfect for beginners. Overall, it’s an excellent platform for gradual skill improvement."
  },
  {
    testimonialUserImg: "edTestimonialUser9",
    testimonialUserName: "Veliana",
    testimonialUserLocation: "Bandung, Indonesia",
    testimonialUserTestimony: "Edbot.ai telah menjadi mitra berharga dalam meningkatkan literasi di sekolah kami. Platform yang mudah digunakan ini menyediakan berbagai konten, mulai dari bahan bacaan hingga latihan interaktif dan video, membuat pembelajaran lebih menyenangkan. Laporan kemajuan membantu memantau perkembangan siswa."
  },
  {
    testimonialUserImg: "edTestimonialUser10",
    testimonialUserName: "Victor Nwaruwe Chukwuebuka",
    testimonialUserLocation: "Nigeria, West Africa",
    testimonialUserTestimony: "Edbot.ai is a fantastic educational tool! Its interactive lessons, personalized learning paths, and real-world examples make complex concepts easy to understand. The user-friendly interface and expert-led content make it stand out. It’s perfect for both students and professionals looking to upskill or reskill."
  }
];

export default function Home() {
  const [isHuawei, setIsHuawei] = useState(false)
  // Function to get the custom order of testimonial indexes
  const getOrderedIndexes = (testimonials: Testimonial[]) => {
    const totalTestimonials = testimonials.length;
    return [
      (totalTestimonials - 2 + totalTestimonials) % totalTestimonials,  // last two items
      (totalTestimonials - 1 + totalTestimonials) % totalTestimonials,  // last one item
      0,  // first item
      1,  // second item
      2,  // third item
    ];
  };

  // State initialization using the ordered indexes
  const [testimonialIndexes, setTestimonialIndexes] = useState(getOrderedIndexes(testimonials));
  const [animationDirection, setAnimationDirection] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Whenever testimonials change, update the testimonialIndexes
  useEffect(() => {
    setTestimonialIndexes(getOrderedIndexes(testimonials));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonials]);

  const goRight = () => {
    setAnimationDirection('left')
    setIsAnimating(true)
    setTestimonialIndexes((prevIndexes) => {
      const nextIndexes = [
        prevIndexes[1], 
        prevIndexes[2], 
        prevIndexes[3], 
        prevIndexes[4], 
        (prevIndexes[4] + 1) % testimonials.length
      ];
      return nextIndexes;
    });
    setTimeout(() => {
      setAnimationDirection(null)
      setIsAnimating(false)
    }, 300)
  };

  const goLeft = () => {
    setAnimationDirection('right')
    setIsAnimating(true)
    setTestimonialIndexes((prevIndexes) => {
      const nextIndexes = [
        (prevIndexes[0] - 1 + testimonials.length) % testimonials.length,
        prevIndexes[0], 
        prevIndexes[1], 
        prevIndexes[2], 
        prevIndexes[3]
      ];
      return nextIndexes;
    });
    setTimeout(() => {
      setAnimationDirection(null)
      setIsAnimating(false)
    }, 300)
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const swipeThreshold = 50; // Minimum distance to recognize a swipe
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        goRight(); // Swipe left (move to the next testimonial)
      } else {
        goLeft(); // Swipe right (move to the previous testimonial)
      }
    }
  };

  useEffect(() => {
    const isHuaweiBrowser = navigator.userAgent.toLowerCase().includes('huawei')
    console.log(isHuaweiBrowser)
    if (isHuawei) {
      setIsHuawei(true)
    }
  }, [])

  return (
    <Box
      sx={{
        // height: '100vh',
        background: 'linear-gradient(180deg, #00509D 4.46%, #0D2359 100%)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          paddingY: 4,
          // gap: 4,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {testimonialIndexes.map((index) => (
          <Paper
            key={index}
            elevation={4}
            className={animationDirection ? `slide-${animationDirection}` : ''}
            sx={{
              padding: { xs: 3, sm: 4 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              minWidth: { xs: '82%', sm: '45%', md: '27%' },
              borderRadius: 4,
              marginX: { xs: 1.2, sm: 2 },
            }}
          >
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                bgcolor: 'gray',
                width: 80,
                height: 80,
              }}
            ></Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>{testimonials[index].testimonialUserName}</Typography>
              <Typography variant="body2">{testimonials[index].testimonialUserLocation}</Typography>
            </Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>{testimonials[index].testimonialUserTestimony}</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                marginTop: 'auto',
              }}
            >
              <StarIcon
                sx={{
                  fontSize: '29px',
                  color: '#FDC500'
                }}
              />
              <StarIcon
                sx={{
                  fontSize: '29px',
                  color: '#FDC500'
                }}
              />
              <StarIcon
                sx={{
                  fontSize: '29px',
                  color: '#FDC500'
                }}
              />
              <StarIcon
                sx={{
                  fontSize: '29px',
                  color: '#FDC500'
                }}
              />
              <StarHalfIcon
                sx={{
                  fontSize: '29px',
                  color: '#FDC500'
                }}
              />
            </Box>
          </Paper>
        ))}
        <Button
          onClick={goLeft}
          disabled={isAnimating}
          size="small"
          sx={{
            display: { xs: isHuawei ? 'inherit' : 'none', lg: 'inherit' },
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: '#F1F5FB',
          }}
        >
          <KeyboardArrowLeftOutlinedIcon
            sx={{
              fontSize: { xs: '30px', sm: '80px' },
              color: '#00509D',
            }}
          />
        </Button>
        <Button
          onClick={goRight}
          disabled={isAnimating}
          size="small"
          sx={{
            display: { xs: isHuawei ? 'inherit' : 'none', lg: 'inherit' },
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: '#F1F5FB',
          }}
        >
          <KeyboardArrowRightOutlinedIcon
            sx={{
              fontSize: { xs: '30px', sm: '80px' },
              color: '#00509D',
            }}
          />
        </Button>
        {isAnimating && (
          <Box
            sx={{
              position: 'absolute',
              bgcolor: 'transparent',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></Box>
        )}
      </Box>
    </Box>
  );
}
