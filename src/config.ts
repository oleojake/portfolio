

interface IConfig {
  me: {
    name: string;
    job: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
}

export const Config: IConfig = {
  me: {
    name: "Pablo Marzal Garrigós",
    job: "multimedia engineer",
    projectLink: "https://github.com/oleojake",
  },
  socials: {
    linkedIn: "https://www.linkedin.com/in/pablo-marzal/",
    github: "https://github.com/oleojake",
  },
  projects: {
    "React tic-tae-toe vs AI": {
      url: "https://github.com/oleojake/React-TicTaeToe-AI",
      tags: ["react", "ai", "chagtp"],
    },
    "Classic Pokédex": {
      url: "https://github.com/oleojake/Classic-Pokedex",
      tags: ["astro", "tailwind", "api"],
    },
  },
};
