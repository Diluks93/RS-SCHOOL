import { Flakes } from '../../../models/interfaces';

export class Snowflake {
W: number;
H: number;
MAX_FLAKES: number;

  constructor() {
    this.W = document.documentElement.scrollWidth;
    this.H = document.documentElement.scrollHeight - 10;
    this.MAX_FLAKES = 200;
  }

  showSnowflake(): void {
    const canvas = document.body.querySelector('#canvas') as HTMLCanvasElement;

    canvas.width = this.W;
    canvas.height = this.H;

    const flakes: Array<Flakes> = [];

    for(let i = 0; i < this.MAX_FLAKES; i++) {
      flakes.push({
        x: Math.random() * this.W,
        y: Math.random() * this.H,
        r: Math.random() * 5 + 2,
        d: Math.random() + 1
      })
    }

    
    setInterval(() => (this.drawFlakes(flakes, canvas)), 25 )
  }

  drawFlakes(flakes: Array<Flakes>, canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, this.W, this.H);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for(let i = 0; i < this.MAX_FLAKES; i++){
      const f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    this.moveFlakes(flakes);
  }

  moveFlakes(flakes: Array<Flakes>) {
    let angle = 0;
    angle += 0.01;
    for(let i = 0; i < this.MAX_FLAKES; i++) {
      const f = flakes[i];
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;
      if(f.y > this.H){
        flakes[i] = { x: Math.random() * this.W, y: 0, r: f.r, d: f.d };
      }
    }
  }
}
