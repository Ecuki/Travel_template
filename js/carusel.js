document.querySelectorAll(".ciclegraph").forEach(ciclegraph => {
  const translateCircle = angle => {
    return `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
      2}px) rotate(${-angle}deg)`;
  };
  const setShowTimeout = element => {
    setTimeout(() => {
      element.style.display = "flex";
    }, 200);
  };
  const setCircle = circle => {
    if (angle >= 360) {
      angle = 0;
    } else if (angle < 0) {
      angle = 360 - dangle;
    }
    circle.setAttribute("id", `${angle}`);
    circle.style.display = circle.id == 0 ? "none" : setShowTimeout(circle);
    circle.style.transform = translateCircle(`${angle}`);
    angle += dangle;
  };

  const changeViewImage = () => {
    const image = document.getElementById("carusel-img");
    const carusel = document.getElementById("180");
    image.style.backgroundImage = carusel.style.backgroundImage;
    // console.log(e.target.style.backgroundImage);
  };

  let circles = ciclegraph.querySelectorAll(".circle");
  let angle = 0,
    dangle = parseInt(360 / circles.length);
  for (let circle of circles) {
    setCircle(circle);
    circle.addEventListener("click", e => {
      handleClickCarusel(e);
      changeViewImage();
    });
  }

  const handleClickCarusel = e => {
    angle = angle >= 360 ? 0 : angle;
    const id = e.target.id;
    if (id < 180) {
      angle -= dangle;
    } else if (id > 180) {
      angle += dangle;
    }

    for (let circle of circles) {
      // circle.style.display =
      //   ((circle.id * 1 === 0 + dangle || circle.id * 1 === 0) && id < 180) ||
      //   (parseInt(circle.id * 1) === 360 - dangle && id > 180)
      //     ? "none"
      //     : setShowTimeout(circle);
      setCircle(circle);
    }
  };
  changeViewImage();
});
