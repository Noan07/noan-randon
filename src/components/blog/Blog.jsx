import React from "react";
import {useTranslation} from "react-i18next";
import "./blog.css";

const Blog = () => {
  const [t] = useTranslation('common');

  return (
    <div className="blog">
        Test
    </div>
  );
};

export default Blog;
