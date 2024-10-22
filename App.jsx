import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import HomeScreen from './screens/HomeScreen';
import ShortListScreen from './screens/ShortListScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 


const Tab = createBottomTabNavigator();

const API_KEY = 'c3563c709b0c045ee106279f30246efa';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const toggleFavorite = (movie) => {
    if (favoriteMovies.some(fav => fav.id === movie.id)) {
      setFavoriteMovies(favoriteMovies.filter(fav => fav.id !== movie.id));
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };
    const movieArray = [{ "adult": false, "backdrop_path": "/417tYZ4XUyJrtyZXj7HpvWf1E8f.jpg", "genre_ids": [16, 878, 10751], "id": 1184918, "original_language": "en", "original_title": "The Wild Robot", "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.", "popularity": 7456.608, "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg", "release_date": "2024-09-12", "title": "The Wild Robot", "video": false, "vote_average": 8.717, "vote_count": 1048 }, { "adult": false, "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg", "genre_ids": [27, 18, 878], "id": 933260, "original_language": "en", "original_title": "The Substance", "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.", "popularity": 4852.638, "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg", "release_date": "2024-09-07", "title": "The Substance", "video": false, "vote_average": 7.306, "vote_count": 713 }, { "adult": false, "backdrop_path": "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg", "genre_ids": [878, 27], "id": 945961, "original_language": "en", "original_title": "Alien: Romulus", "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.", "popularity": 6369.381, "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg", "release_date": "2024-08-13", "title": "Alien: Romulus", "video": false, "vote_average": 7.295, "vote_count": 1697 }, { "adult": false, "backdrop_path": "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg", "genre_ids": [28, 35, 878], "id": 533535, "original_language": "en", "original_title": "Deadpool & Wolverine", "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.", "popularity": 2958.871, "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", "release_date": "2024-07-24", "title": "Deadpool & Wolverine", "video": false, "vote_average": 7.7, "vote_count": 4650 }, { "adult": false, "backdrop_path": "/4KHEK6AQFHhv4TDtL3KLReePB05.jpg", "genre_ids": [28, 27, 53], "id": 1029235, "original_language": "en", "original_title": "Azrael", "overview": "In a world where no one speaks, a devout female hunts down a young woman who has escaped her imprisonment. Recaptured by its ruthless leaders, Azrael is due to be sacrificed to pacify an ancient evil deep within the surrounding wilderness.", "popularity": 2309.545, "poster_path": "/qpdFKDvJS7oLKTcBLXOaMwUESbs.jpg", "release_date": "2024-09-27", "title": "Azrael", "video": false, "vote_average": 6.045, "vote_count": 78 }, { "adult": false, "backdrop_path": "/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg", "genre_ids": [35, 14, 27], "id": 917496, "original_language": "en", "original_title": "Beetlejuice Beetlejuice", "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.", "popularity": 2059.319, "poster_path": "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg", "release_date": "2024-09-04", "title": "Beetlejuice Beetlejuice", "video": false, "vote_average": 7.204, "vote_count": 1444 }, { "adult": false, "backdrop_path": "/3m0j3hCS8kMAaP9El6Vy5Lqnyft.jpg", "genre_ids": [878, 53, 18, 27], "id": 1125510, "original_language": "es", "original_title": "El hoyo 2", "overview": "After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.", "popularity": 1781.297, "poster_path": "/izuzUb0sDokqp9o8utVfsrSJuy5.jpg", "release_date": "2024-09-27", "title": "The Platform 2", "video": false, "vote_average": 5.663, "vote_count": 645 }, { "adult": false, "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg", "genre_ids": [16, 10751, 35, 28], "id": 519182, "original_language": "en", "original_title": "Despicable Me 4", "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.", "popularity": 1696.668, "poster_path": "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg", "release_date": "2024-06-20", "title": "Despicable Me 4", "video": false, "vote_average": 7.121, "vote_count": 2018 }, { "adult": false, "backdrop_path": "/eQEgKIRF7KeVGBQ8IYcklpU8RPf.jpg", "genre_ids": [27, 53], "id": 1034541, "original_language": "en", "original_title": "Terrifier 3", "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.", "popularity": 1413.081, "poster_path": "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg", "release_date": "2024-10-09", "title": "Terrifier 3", "video": false, "vote_average": 7, "vote_count": 94 }, { "adult": false, "backdrop_path": "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg", "genre_ids": [16, 10751, 12, 35, 18], "id": 1022789, "original_language": "en", "original_title": "Inside Out 2", "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.", "popularity": 1433.487, "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", "release_date": "2024-06-11", "title": "Inside Out 2", "video": false, "vote_average": 7.62, "vote_count": 4400 }, { "adult": false, "backdrop_path": "/g1z1ZvYKcmk9EnVOTYXR6vkNjkZ.jpg", "genre_ids": [14, 27, 28], "id": 1087822, "original_language": "en", "original_title": "Hellboy: The Crooked Man", "overview": "Hellboy and a rookie BPRD agent get stranded in 1950s rural Appalachia. There, they discover a small community haunted by witches, led by a local devil with a troubling connection to Hellboy's past: the Crooked Man.", "popularity": 1328.022, "poster_path": "/iz2GabtToVB05gLTVSH7ZvFtsMM.jpg", "release_date": "2024-08-29", "title": "Hellboy: The Crooked Man", "video": false, "vote_average": 5, "vote_count": 141 }, { "adult": false, "backdrop_path": "/l8OyAXEp5FKZWmDhqJMbiwAEvz.jpg", "genre_ids": [27, 18], "id": 814889, "original_language": "en", "original_title": "Never Let Go", "overview": "As an evil takes over the world beyond their front doorstep, the only protection for a mother and her twin sons is their house and their family’s protective bond.", "popularity": 1106.53, "poster_path": "/3EpZ2ksjijmdr8BhISP03PYzNFW.jpg", "release_date": "2024-09-18", "title": "Never Let Go", "video": false, "vote_average": 6.1, "vote_count": 129 }, { "adult": false, "backdrop_path": "/oAadr06zrHUQVKdZdgdBojRssPq.jpg", "genre_ids": [18, 80, 53], "id": 889737, "original_language": "en", "original_title": "Joker: Folie à Deux", "overview": "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.", "popularity": 934.071, "poster_path": "/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg", "release_date": "2024-10-01", "title": "Joker: Folie à Deux", "video": false, "vote_average": 5.833, "vote_count": 879 }, { "adult": false, "backdrop_path": "/uVWlwJebxX0M3axXAUrryJ6w9cQ.jpg", "genre_ids": [28, 35, 80], "id": 507241, "original_language": "en", "original_title": "The Killer's Game", "overview": "When top hitman Joe Flood is diagnosed with a terminal illness, he decides to take matters into his own hands – by taking a hit out on himself. But when the very hitmen he hired also target his ex-girlfriend, he must fend off an army of assassin colleagues and win back the love of his life before it's too late.", "popularity": 812.402, "poster_path": "/4bKlTeOUr5AKrLky8mwWvlQqyVd.jpg", "release_date": "2024-09-12", "title": "The Killer's Game", "video": false, "vote_average": 6.4, "vote_count": 66 }, { "adult": false, "backdrop_path": "/tCKWksaQI8XkAQLVou0AlGab5S6.jpg", "genre_ids": [28, 878], "id": 1144962, "original_language": "en", "original_title": "Transmorphers: Mech Beasts", "overview": "20 years after the events of Transmorphers, a newer, more advanced species of alien robot descends on a rebuilt Earth, threatening once again to destroy the planet.", "popularity": 1000.274, "poster_path": "/oqhaffnQqSzdLrYAQA5W4IdAoCX.jpg", "release_date": "2023-06-09", "title": "Transmorphers: Mech Beasts", "video": false, "vote_average": 5.3, "vote_count": 26 }, { "adult": false, "backdrop_path": "/hPIWQT70wQK6akqfLXByEvr62u0.jpg", "genre_ids": [28, 53, 27, 878], "id": 726139, "original_language": "ko", "original_title": "탈출: 프로젝트 사일런스", "overview": "Due to sudden deteriorating weather conditions, visibility on the Airport Bridge is severely impaired, leaving people stranded and at risk of the bridge collapsing due to a series of chain collisions and explosions. Amidst the chaos, the canine subjects \"Echo\" from the military experiment \"Project Silence,\" who were being transported in secret, break free, and all human survivors become targets of relentless attacks.", "popularity": 1015.834, "poster_path": "/fttoFfKikQMwIoV3UVvlCvBhbUw.jpg", "release_date": "2024-07-11", "title": "Project Silence", "video": false, "vote_average": 7.084, "vote_count": 184 }, { "adult": false, "backdrop_path": "/Asg2UUwipAdE87MxtJy7SQo08XI.jpg", "genre_ids": [28, 14, 27], "id": 957452, "original_language": "en", "original_title": "The Crow", "overview": "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.", "popularity": 922.574, "poster_path": "/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg", "release_date": "2024-08-21", "title": "The Crow", "video": false, "vote_average": 5.811, "vote_count": 652 }, { "adult": false, "backdrop_path": "/9msuazXGWAyl7vhxVFU7e7Bb5Ik.jpg", "genre_ids": [18, 10749], "id": 179387, "original_language": "tl", "original_title": "Heavenly Touch", "overview": "Jonard is having trouble making ends meet. His mother is suffering from depression, and he and his sister are forced to quit school in order to take care of her. One day, Jonard meets up his friend Rodel, and Rodel introduces him to the world of massage parlors. Rodel teaches him massage, and brings him to Heavenly Touch, a syndicate-run massage parlor that mostly caters to homosexuals.", "popularity": 894.379, "poster_path": "/ory8WuAqznTE7lfopTSymHpop2t.jpg", "release_date": "2009-05-12", "title": "Heavenly Touch", "video": false, "vote_average": 6, "vote_count": 19 }, { "adult": false, "backdrop_path": "/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg", "genre_ids": [27, 53], "id": 420634, "original_language": "en", "original_title": "Terrifier", "overview": "A maniacal clown named Art terrorizes three young women on Halloween night and everyone else who stands in his way.", "popularity": 741.604, "poster_path": "/6PQqC4SbY910VvyVad6mvsboILU.jpg", "release_date": "2018-01-25", "title": "Terrifier", "video": false, "vote_average": 6.429, "vote_count": 2174 }, { "adult": false, "backdrop_path": "/AaYdXkEqExgG66p55J677Qnagpf.jpg", "genre_ids": [27, 9648], "id": 1100782, "original_language": "en", "original_title": "Smile 2", "overview": "About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.", "popularity": 998.028, "poster_path": "/4Ki6hf0nN3vp9xDrseyFHfXGa7c.jpg", "release_date": "2024-10-16", "title": "Smile 2", "video": false, "vote_average": 7, "vote_count": 88 }];

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // Example icons
              return <AntDesign name={iconName} size={35} color={color} />;
            } else if (route.name === 'ShortList') {
              iconName = focused ? 'bookmark' : 'bookmark-o'; // Example icons
              return <FontAwesome name={iconName} size={35} color={color} />;
            }

          },
          tabBarActiveTintColor: '#ff6347', // Active tab color
          tabBarInactiveTintColor: '#fff', // Inactive tab color
          tabBarLabelStyle: { display: 'none' }, // Hides the tab labels
        })}
      >
        <Tab.Screen name="Home" options={{ tabBarLabel: () => null }}>
          {() => <HomeScreen movies={movies} toggleFavorite={toggleFavorite} favoriteMovies={favoriteMovies} />}
        </Tab.Screen>
        <Tab.Screen name="ShortList" options={{ tabBarLabel: () => null }}>
          {() => <ShortListScreen favoriteMovies={favoriteMovies} toggleFavorite={toggleFavorite} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
