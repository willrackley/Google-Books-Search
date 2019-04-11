import React from "react";
import "./style.css";

export default function Footer(props) {
  return (
    <footer className="container-fluid">
        <p className="text-center pt-2 mt-2"><small>Will Rackley: 2019 Ga Tech Web Development Bootcamp</small></p>
        <div className="text-center socialLinks mb-1">
            <a href="https://www.linkedin.com/in/willrackley" class="text-muted"><i class="fab fa-linkedin mr-2"></i></a> <a href="https://www.instagram.com/willrackleyiii/" class="text-muted"><i class="fab fa-instagram mr-2"></i></a> <a href="https://www.facebook.com/willrackley" class="text-muted"><i class="fab fa-facebook mr-2"></i></a> <a href="https://github.com/willrackley" class="text-muted"><i class="fab fa-github mr-2"></i></a>
        </div>
    </footer>
  );
}