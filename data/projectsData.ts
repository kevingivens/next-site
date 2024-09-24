interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'PyQL',
    description: `QuantLib is an open source option pricing library written in C++.  There exist python bindings for Quantlib via the 
    official SWIG bindings.  PyQL is a seperate open source project with the goal of providing python bindings for Quantlib using Cython.  
    As with other Cython-based projects, this approach allows greater flexibility and performance than the SWIG-based bindings.`,
    imgSrc: '/static/images/BlackVol_Bilinear.png',
    href: 'https://github.com/enthought/pyql',
  },
]

export default projectsData
