import React from "react";
import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import HeroImg from "../assets/HeroImg.svg";

const Home = () => {
  const latestPosts = [
    {
      id: "1",
      title: "This is first blog post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis quaerat non iure odit laboriosam facere rerum! Praesentium, iure dicta?",
    },
    {
      id: "2",
      title: "This is second blog post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis quaerat non iure odit laboriosam facere rerum! Praesentium, iure dicta?",
    },
    {
      id: "3",
      title: "This is third blog post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis quaerat non iure odit laboriosam facere rerum! Praesentium, iure dicta?",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <main
        id="hero"
        className="grid lg:grid-cols-2 min-h-[90vh] gap-y-4 max-w-7xl border-2 border-black mx-5 my-5 rounded-4xl mx-auto"
      >
        <div className="grid place-content-center px-10 gap-y-8 text-center md:text-left">
          <Typography variant="h1">
            Welcome to BlogIt - Your Thoughts, Your Space
          </Typography>
          <Typography variant="lead">
            A clean and simple way to share ideas, stories, and projects with
            world. Whether it's your first post or your fiftieth, BlogIt is
            built for expression without distractions.
          </Typography>
          <div className="flex gap-8 w-full justify-center">
            <NavLink to="/blogs" className="w-full">
              <Button className="flex items-center justify-center gap-2 w-full md:w-auto">
                Explore Blogs <ArrowRightIcon className="size-6" />
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="hidden lg:grid place-content-center">
          <div className="hidden md:block">
            <img src={HeroImg} className="w-auto h-96" alt="" />
          </div>
        </div>
      </main>

      {/* Latest Posts Section */}
      <section id="latest-posts" className="m-6 ">
        <Typography variant="h2" className="text-center mb-4">
          Latest Posts
        </Typography>
        <div className="grid lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Card key={post.id} className=" border-2">
              <CardBody>
                <Typography variant="h5" className="mb-2">
                  {post.title}
                </Typography>
                <Typography variant="paragraph">{post.content}</Typography>
              </CardBody>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-6 bg-amber-100">
        <Typography variant="h2" className="text-center">
          About Us
        </Typography>
        <div>
          <Typography
            variant="lead"
            className="max-w-[70ch] mx-auto text-justify"
          >
            BlogIt is a space where writers, thinkers and creatives come
            together to express themselves and connect with like-minded
            individuals. Our mission is to provide a seamless and intuitive
            blogging experience, allowing you to focus on what matters most -
            your content. Join our community today and start sharing your voice
            with the world.
          </Typography>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 bg-gray-50">
        <Typography variant="h2" className="text-center">
          Get in Touch
        </Typography>
        <div className="max-w-[70ch] mx-auto text-center">
          <Typography variant="lead">
            Have any questions or feedback? We'd love to hear from you. Send us
            a message and we'll get back to you as soon as possible.
          </Typography>
          <form className="mt-4">
            <div className="flex flex-col gap-2">
              <Input label="Name"></Input>
              <Input label="Email"></Input>
              <Textarea label="Message" />
            </div>
            <Button className="mt-4">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer Section */}

      <footer className="border-t-black border-t-2 p-4 ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <Typography variant="h5" className="text-center lg:text-left">BlogIt.</Typography>
            <Typography>2025 copywright</Typography>
          </div>
          <ul className="flex flex-wrap gap-4 mt-4 lg:mt-0">
            <Typography as='li'>Instagram</Typography>
            <Typography as='li'>Twitter</Typography>
            <Typography as='li'>Facebook</Typography>
            <Typography as='li'>LinkedIn</Typography>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Home;
