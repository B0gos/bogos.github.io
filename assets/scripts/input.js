// Input provider, intended to be changed depending on use

export default function getInputs() {
   let count = 32;
   let tolerance = 96;
   let speed = 2;
   let color = "white";

   return {count:count, tolerance:tolerance, speed:speed, color:color}
}
