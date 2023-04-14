export const fetchFootballOdds = async () => {
  const odds = [];
  const teams = uefaTeams;

  for (let k = 0; k < uefaTeams.length / 2; k++) {
    const randomTeamA = Math.floor(Math.random() * teams.length - 1) + 1;
    let randomTeamB = Math.floor(Math.random() * teams.length - 1) + 1;

    while (randomTeamB === randomTeamA) {
      randomTeamB = Math.floor(Math.random() * teams.length) + 1;
    }
    
    odds.push({
      teamA: {
        ...teams[randomTeamA],
        odd: Math.round(((Math.random() * 2) + 1) * 100) / 100
      },
      teamB: {
        ...teams[randomTeamB],
        odd: Math.round(((Math.random() * 2) + 1) * 100) / 100
      }
    })
  }
  
  return odds;
}

const uefaTeams = [
  { name: 'AFC Ajax', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50143.png' },
  { name: 'Club Atlético de Madrid', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50124.png' },
  { name: 'FC Barcelona', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50080.png' },
  { name: 'Celtic FC', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50050.png' },
  { name: 'F.C. Copenhagen', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/52709.png' },
  { name: 'GNK Dinamo Zagreb', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50164.png' },
  { name: 'Juventus', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50139.png' },
  { name: 'Bayer 04 Leverkusen', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50109.png' },
  { name: 'Olympique de Marseille', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/52748.png' },
  { name: 'FC Viktoria Plzeň', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/64388.png' },
  { name: 'Rangers FC', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50121.png' },
  { name: 'FC Salzburg', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50030.png' },
  { name: 'Sevilla FC', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/52714.png' },
  { name: 'FC Shakhtar Donetsk', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/52707.png' },
  { name: 'Sporting Clube de Portugal', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50149.png' },
  { name: 'Maccabi Haifa FC', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/59045.png' },
  { name: 'Club Brugge', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50043.png' },
  { name: 'Borussia Dortmund', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/52758.png' },
  { name: 'Eintracht Frankfurt', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50072.png' },
  { name: 'RB Leipzig', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/2603790.png' },
  { name: 'Liverpool FC', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/7889.png' },
  { name: 'Paris Saint-Germain', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/52747.png' },
  { name: 'FC Porto', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50064.png' },
  { name: 'Tottenham Hotspur', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/1652.png' },
  { name: 'FC Bayern München', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50037.png' },
  { name: 'SL Benfica', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50147.png' },
  { name: 'Chelsea FC', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/52914.png' },
  { name: 'FC Internazionale Milano', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50138.png' },
  { name: 'Manchester City FC', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/52919.png' },
  { name: 'AC Milan', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50058.png' },
  { name: 'SSC Napoli', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50136.png' },
  { name: 'Real Madrid CF', logo: 'https://img.uefa.com/imgml/TP/teams/logos/100x100/50051.png' },
]

export const theme = {
  palette: {
    primary: {
      light: '#ffcd38',
      main: '#ffc107',
      dark: '#b28704',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff',
    },
  }
}

export const ADD_BET = '@golden-gamble/bet/add';
export const REMOVE_BET = '@golden-gamble/bet/remove';
export const MY_BETS_DRAWER = '@golden-gamble/my-bets';

export const subscribeEvent = (eventName, listener) => {
  addEventListener(eventName, listener);
}

export const unsubscribeEvent = (eventName, listener) => {
  removeEventListener(eventName, listener);
}

export const publishEvent = (eventName, data) => {
  const event = new CustomEvent(eventName, { detail: data });
  dispatchEvent(event);
}
