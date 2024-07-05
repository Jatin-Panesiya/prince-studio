import { workImages } from "@/utils/constants";
import { Divider } from "@mantine/core";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallary = () => {
  return (
    <div className="bg-slate-100">
      <div className="text-black top-container !py-20 max-sm:!py-10">
        <p className="text-4xl font-merry-bold tracking-tight pb-5 text-center">
          Gallary
        </p>
        <Divider className="pb-10" />

        {/* <ImageList cols={3} variant="quilted">
          {workImages.map((data) => (
            <ImageListItem key={data.image}>
              <a href={data.image} target="_blank">
                <img
                  srcSet={`${data.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${data.image}?w=164&h=164&fit=crop&auto=format`}
                  alt={data.image}
                  loading="lazy"
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList> */}

        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {workImages.map((item) => (
            <ImageListItem
              key={item.image}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.image, 121, item.rows, item.cols)}
                alt={item.image}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Gallary;
