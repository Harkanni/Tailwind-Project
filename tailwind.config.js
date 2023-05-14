/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.html"],
  theme: {
  	screens: {
		sm: '480px',
		md: '768px',
		lg: '976px',
		xl: '1440px'
	},
    extend: {
    	colors: {
    		brightRed: 'hsl(12, 88%, 59%)',
    		brightRedLight: 'hsl(12, 88%, 69%)',
    		brightRedSunLight: 'hsl(12, 88%, 95%)',
    		darkBlue: 'hsl(228, 39%, 23%)',
    		darkGrayishBlue: 'hsl(227, 12%, 61%)',
    		veryDarkBlue: 'hsl(233, 12%, 13%)',
    		veryPaleRed: 'hsl(13, 180%, 96%)',
    		veryLightGrey: 'hsl(0, 8%, 98%)',
    	}
    },
  },
  plugins: [],
}
