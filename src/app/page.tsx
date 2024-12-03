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
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  },
  {
    testimonialUserImg: "edTestimonialUser2",
    testimonialUserName: "Afiqah",
    testimonialUserLocation: "Selangor, Malaysia",
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  },
  {
    testimonialUserImg: "edTestimonialUser3",
    testimonialUserName: "Aiman",
    testimonialUserLocation: "Selangor, Malaysia",
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  },
  {
    testimonialUserImg: "edTestimonialUser4",
    testimonialUserName: "Ayuba Joida",
    testimonialUserLocation: "Gombe State, Nigeria",
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
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
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  },
  {
    testimonialUserImg: "edTestimonialUser7",
    testimonialUserName: "Oktaviani Ndale",
    testimonialUserLocation: "Kupang, Indonesia",
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  },
  {
    testimonialUserImg: "edTestimonialUser8",
    testimonialUserName: "Sami Arti",
    testimonialUserLocation: "Tegal, Indonesia",
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  },
  {
    testimonialUserImg: "edTestimonialUser9",
    testimonialUserName: "Veliana",
    testimonialUserLocation: "Bandung, Indonesia",
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  },
  {
    testimonialUserImg: "edTestimonialUser10",
    testimonialUserName: "Victor Nwaruwe Chukwuebuka",
    testimonialUserLocation: "Nigeria, West Africa",
    testimonialUserTestimony: "Edbot.ai offers a structured approach with an intuitive interface, making learning effortless. Additionally, the community support and feedback mechanisms keep me motivated and accountable."
  }
];

export default function Home() {
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
  const [disabledButton, setDisabledButton] = useState(false)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Whenever testimonials change, update the testimonialIndexes
  useEffect(() => {
    setTestimonialIndexes(getOrderedIndexes(testimonials));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonials]);

  const goRight = () => {
    setAnimationDirection('left')
    setDisabledButton(true)
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
      setDisabledButton(false)
    }, 500)
  };

  const goLeft = () => {
    setAnimationDirection('right')
    setDisabledButton(true)
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
      setDisabledButton(false)
    }, 500)
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

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(180deg, #00509D 4.46%, #0D2359 100%)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          paddingY: 4,
          gap: 4,
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
              minWidth: { xs: '85%', sm: '39%', md: '27%' },
              borderRadius: 4,
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
          disabled={disabledButton}
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'gray',
          }}
        >
          <KeyboardArrowLeftOutlinedIcon
            sx={{
              fontSize: '80px',
              color: '#FDC500',
            }}
          />
        </Button>
        <Button
          onClick={goRight}
          disabled={disabledButton}
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'gray',
          }}
        >
          <KeyboardArrowRightOutlinedIcon
            sx={{
              fontSize: '80px',
              color: '#FDC500',
            }}
          />
        </Button>
      </Box>
    </Box>
  );
}
