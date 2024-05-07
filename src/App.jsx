import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const App = () => {
  return (
    <div className="swiper-container">
      <Swiper
        className="swiper-wrapper"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('Изменение слайда')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="swiper-slide">
          <img
            src="https://s3-alpha-sig.figma.com/img/fbf7/f4bf/3cbb985b9ecff702d608abc19aaab910?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvM0iw-0BaUqLKqwQyEu~qTzSW6IiGvw-OVa39WC1gy4SutPd1VRpBW0FzXTe04BzvB~wAVb4NbNE89LtKypjZFU-hSmvYrEwtnPwJSDs16ypY390wf2En9-5Da7rBdcWmIWR2LTD296B6uJXgCcoQ~7fzbSuiq2Jzh5b5Z5hVUE7n45Do3x9Kj6ERp~41kohAm0MxaAmrgBeFUwstAJAKVVHllyuRL2e1oRE0~1hbY7I6epYf8yUt8VPalcnZ8Gh~3u-dY5bYuLcbLwuUwblsuWSHqFHHEuWssWq8ZZx78KhOcMB3eGUsY1sh0b0dmJAD~z~JwAE2zwyCp9rrGUhQ__"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://s3-alpha-sig.figma.com/img/a842/70b7/45e3cdee9906c1cb6db8abd396a2e28f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbnePsJO8yiIr-rbEZMbys~tiv8N~0tEz3C1e1qTnOVk8qKK4rUp3jgjCwEPcwD1Kdbc8g8uuJXTfsyUwf7~YmUq2BseajgKH8MI3O9nsFSD-PNm~jxYMT1avXsJdklhOqDlebyK8cEBY8J2RMiRXZyaTm0OyRH8z6WcR015HLZTkkkW1ou9qNQjBObXi2gNj6krTZhfRaBbA7BqWtWLPXlx9wzDShexGLL9jNlRvT2bt0uxbXYmwWPg69WxVFpLFBbikQS2Pqvck8YTT8IbqTHoa4tYrTi6Gj8v4mnvkH10O~pK~qVq67iNebem0SY5LT5idh7aqIM5oghM~cdbzA__"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://s3-alpha-sig.figma.com/img/15bd/fd18/0d9caa17dc836c5665fee17a48221be6?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYnkadWcLc2QT9HdfgTgmPVBJZG1joFJpZ0hCcBGH6vI~83LGi3cRwp3mi8-wqKzbDLHOopRKOnhqpKJAUyLlpO8xz4u3~oVtUmTbmWRqQcq7KnnETtcE1xwIHYkgNOrEmES~TvSz6Rag2cF-1772QWCNMGox8clLU~XAYZko0Tebjw2UBRCzFOJjU9ALhe0HDXukTviHJGoyVao64d8lxkH73QJ~S8HVLKx7EAlounwNHTEYNrZEpO-e2HeVMKd50wykdyZICH5y53ZyxIzoRdf8VBj7JdwQOEfqIkao6QJ7oOjgbiaowJ8swGVKnFqMJNSqVEYSnQX94U9p1fbRQ__"
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
