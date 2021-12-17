import { Flakes } from '../../../models/interfaces';

export class Snowflake {
WIDTH: number;
HEIGHT: number;
MAX_SNOWFLAKES: number;

  constructor() {
    this.WIDTH = document.documentElement.scrollWidth;
    this.HEIGHT = document.documentElement.scrollHeight - 10;
    this.MAX_SNOWFLAKES = 200;
  }

  showSnowflake(): void {
    const canvas: HTMLCanvasElement = document.body.querySelector('#canvas') as HTMLCanvasElement;

    canvas.width = this.WIDTH;
    canvas.height = this.HEIGHT;

    const flakes: Array<Flakes> = [];

    for(let i = 0; i < this.MAX_SNOWFLAKES; i++) {
      flakes.push({
        x: Math.random() * this.WIDTH,
        y: Math.random() * this.HEIGHT,
        r: Math.random() * 5 + 2,
        d: Math.random() + 1
      })
    }
    
    setInterval(() => (this.drawFlakes(flakes, canvas)), 25 )
  }

  private drawFlakes(flakes: Array<Flakes>, canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    ctx.fillStyle = "#ddeeff";
    ctx.beginPath();
    for(let i = 0; i < this.MAX_SNOWFLAKES; i++){
      const snowflake = flakes[i];
      ctx.moveTo(snowflake.x, snowflake.y);
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    this.moveFlakes(flakes);
  }

  private moveFlakes(flakes: Array<Flakes>): void {
    const angle = 0.01;
    for(let i = 0; i < this.MAX_SNOWFLAKES; i++) {
      const snowflake = flakes[i];
      snowflake.y += Math.pow(snowflake.d, 2) + 1;
      snowflake.x += Math.sin(angle) * 2;
      if(snowflake.y > this.HEIGHT) {
        flakes[i] = { x: Math.random() * this.WIDTH, y: 0, r: snowflake.r, d: snowflake.d };
      }
    }
  }
}
