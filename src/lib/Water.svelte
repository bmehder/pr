<div class="drop">
  <div class="content">
    <h2><slot name="heading">01</slot></h2>
    <p><slot /></p>
    <a href={'#'}><slot name="button">Read More</slot></a>
  </div>
</div>

<style>
  .drop {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--clr);
    border-radius: 50%;
    box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
      10px 10px 10px rgba(0, 0, 0, 0.05), 10px 10px 10px rgba(0, 0, 0, 0.05),
      inset -10px -10px 12px rgba(255, 255, 255, 0.9);
    transition: 0.5s ease-in-out;
    aspect-ratio: 1;
    overflow: hidden;
  }
  .drop:hover {
    border-radius: var(--border);
    scale: 1.01;
    box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
      25px 35px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05),
      inset -20px -20px 25px rgba(255, 255, 255, 0.9);
  }
  .drop::before {
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    top: 15%;
    left: 15%;
    background-color: white;
    border-radius: 50%;
    opacity: 0.9;
    transition: 0.5s;
  }
  .drop::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    top: 25%;
    left: 30%;
    background-color: white;
    border-radius: 50%;
    opacity: 0.9;
    transition: 0.5s;
  }
  .drop:hover::before,
  .drop:hover::after {
    scale: 1.1;
    opacity: 0.8;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    text-align: center;
    padding: 60px;
  }
  h2 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: #eff0f4;
    color: var(--clr);
    font-size: 2em;
    border-radius: 50%;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
      inset -2px -5px 10px rgba(255, 255, 255, 1), 15px 15px 10px rgba(0, 0, 0, 0.05),
      15px 15px 10px rgba(0, 0, 0, 0.025);
  }
  p {
    margin: 0;
  }
  a {
    position: relative;
    padding: 10px 25px;
    background: var(--clr);
    text-decoration: none;
    color: white;
    border-radius: 25px;
    font-weight: 500;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    opacity: 0.75;
    transition: 0.25s;
  }
  a:hover {
    opacity: 1;
  }
  a::before {
    content: '';
    position: absolute;
    width: 65%;
    height: 4px;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
</style>
