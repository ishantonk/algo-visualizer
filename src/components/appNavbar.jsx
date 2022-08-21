import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { algoTypeList } from "../utils/utils";

export default function AppNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {algoTypeList.map((algoType, index) => (
        <Typography key={index} as="li" variant="small" color="blue-gray" className="p-1 font-normal text-gray-600 hover:text-gray-800">
          <Link to={algoType.link}>
            {algoType.title}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={'/'} className="flex items-center">
          <Typography as="h1" variant="h1" className="mr-4 cursor-pointer py-1.5 text-2xl font-bold">
            <span className="text-xl mx-1">
              Algorithm
            </span>
            <span className="text-gray-600 font-normal">
              Visualizer
            </span>
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <a href="https://github.com/ishantonk/algo-visualizer" target="_blank" rel="noreferrer">
          <Button variant="gradient" size="sm" className="hidden lg:inline-block">
            <span>Source code</span>
          </Button>
        </a>
        {/* For mobile */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <a href="https://github.com/ishantonk/algo-visualizer" target="_blank" rel="noreferrer">
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Source code</span>
          </Button>
        </a>
      </MobileNav>
    </Navbar>
  );
}