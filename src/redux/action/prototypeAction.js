export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_FIND_PROTO = "FETCH_FIND_PROTO";
export function fetchStart() {
  return {
    type: FETCH_START,
    loading: true,
  };
}

export function fetchSuccess(prototypes) {
  return {
    type: FETCH_SUCCESS,
    loading: false,
    prototypes,
    error: null,
  };
}

export function fetchFail(error) {
  return {
    type: FETCH_ERROR,
    loading: false,
    error,
  };
}

export function getPrototypesThunk() {
  return async (dispatch) => {
    try {
      const prototypesBackend = [
        {
          id: "pp-01",
          title: "Kids-story",
          artist: "Thomas Buisson",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
          price: 10,
          pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
        },
        {
          id: "pp-02",
          title: "mockyapp",
          artist: "Ahmed Amr",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
          price: 20,
          pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
        },
        {
          id: "pp-03",
          title: "macOS Folder Concept",
          artist: "Dominik Kandravý",
          desc: "Folder concept prototype by Dominik Kandravý.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/macOS_Folder_Concept_-_Folder_concept.mp4",
          price: 30,
          pieUrl: "https://cloud.protopie.io/p/acde5ccdf9",
        },
        {
          id: "pp-04",
          title: "Translator",
          artist: "Tony Kim",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Translator.mp4",
          price: 40,
          pieUrl: "https://cloud.protopie.io/p/b91edba11d",
        },
        {
          id: "pp-05",
          title: "In-car voice control",
          artist: "Tony Kim",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/In-car_voice_control.mp4",
          price: 50,
          pieUrl: "https://cloud.protopie.io/p/6ec7e70d1a",
        },
        {
          id: "pp-06",
          title: "The Adventures of Proto",
          artist: "Richard Oldfield",
          desc: `Made exclusively for Protopie Playoff 2021
                      Shout up if you get stuck!
                      For the full experience. View in the Protopie App.
                      #PieDay #PlayOff #ProtoPie`,
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/The_Adventures_of_Proto.mp4",
          price: 60,
          pieUrl: "https://cloud.protopie.io/p/95ee13709f",
        },
        {
          id: "pp-07",
          title: "Sunglasses shop app",
          artist: "Mustafa Alabdullah",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/sunglasses_shop_app.mp4",
          price: 70,
          pieUrl: "https://cloud.protopie.io/p/6f336cac8c",
        },
        {
          id: "pp-08",
          title: "Alwritey—Minimalist Text Editor",
          artist: "Fredo Tan",
          desc: `This minimalist text editor prototype was made with ProtoPie by Fredo Tan.
                      ---
                      Inspired by Writty, a simple writing app by Carlos Yllobre. Try out Writty at https://writtyapp.com.
                      ---
                      ProtoPie is an interactive prototyping tool for all digital products.
                      ---
                      Learn more about ProtoPie at https://protopie.io.`,
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/minimalist-text-editor.mp4",
          price: 80,
          pieUrl: "https://cloud.protopie.io/p/946f88f8d3",
        },
        {
          id: "pp-09",
          title: "Voice search for TV",
          artist: "Tony Kim",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/TV.mp4",
          price: 90,
          pieUrl: "https://cloud.protopie.io/p/60ee64cda0",
        },
        {
          id: "pp-10",
          title: "Finance App Visual Interaction 2.0",
          artist: "Arpit Agrawal",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Credit_Card_App.mp4",
          price: 90,
          pieUrl:
            "https://cloud.protopie.io/p/09ce2fdf84/21?ui=true&mockup=true&touchHint=true&scaleToFit=true&cursorType=touch",
        },
        {
          id: "pp-11",
          title: "Whack-a-mole",
          artist: "Changmo Kang",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Whack_a_mole.mp4",
          price: 90,
          pieUrl: "https://cloud.protopie.io/p/ab796f897e",
        },
        {
          id: "pp-12",
          title: "Voice Note",
          artist: "Haerin Song",
          desc: `Made by Haerin Song
                      (Soda Design)`,
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Voice_note_with_sound_wave.mp4",
          price: 90,
          pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
        },
      ];
      dispatch(fetchStart());
      const res = prototypesBackend;
      dispatch(fetchSuccess(res));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
}

export function getOrderedPrototypeThunk(id) {
  return async (dispatch) => {
    try {
      const prototypesBackend = [
        {
          id: "pp-01",
          title: "Kids-story",
          artist: "Thomas Buisson",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
          price: 10,
          pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
        },
        {
          id: "pp-02",
          title: "mockyapp",
          artist: "Ahmed Amr",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
          price: 20,
          pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
        },
        {
          id: "pp-03",
          title: "macOS Folder Concept",
          artist: "Dominik Kandravý",
          desc: "Folder concept prototype by Dominik Kandravý.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/macOS_Folder_Concept_-_Folder_concept.mp4",
          price: 30,
          pieUrl: "https://cloud.protopie.io/p/acde5ccdf9",
        },
        {
          id: "pp-04",
          title: "Translator",
          artist: "Tony Kim",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Translator.mp4",
          price: 40,
          pieUrl: "https://cloud.protopie.io/p/b91edba11d",
        },
        {
          id: "pp-05",
          title: "In-car voice control",
          artist: "Tony Kim",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/In-car_voice_control.mp4",
          price: 50,
          pieUrl: "https://cloud.protopie.io/p/6ec7e70d1a",
        },
        {
          id: "pp-06",
          title: "The Adventures of Proto",
          artist: "Richard Oldfield",
          desc: `Made exclusively for Protopie Playoff 2021
                      Shout up if you get stuck!
                      For the full experience. View in the Protopie App.
                      #PieDay #PlayOff #ProtoPie`,
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/The_Adventures_of_Proto.mp4",
          price: 60,
          pieUrl: "https://cloud.protopie.io/p/95ee13709f",
        },
        {
          id: "pp-07",
          title: "Sunglasses shop app",
          artist: "Mustafa Alabdullah",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/sunglasses_shop_app.mp4",
          price: 70,
          pieUrl: "https://cloud.protopie.io/p/6f336cac8c",
        },
        {
          id: "pp-08",
          title: "Alwritey—Minimalist Text Editor",
          artist: "Fredo Tan",
          desc: `This minimalist text editor prototype was made with ProtoPie by Fredo Tan.
                      ---
                      Inspired by Writty, a simple writing app by Carlos Yllobre. Try out Writty at https://writtyapp.com.
                      ---
                      ProtoPie is an interactive prototyping tool for all digital products.
                      ---
                      Learn more about ProtoPie at https://protopie.io.`,
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/minimalist-text-editor.mp4",
          price: 80,
          pieUrl: "https://cloud.protopie.io/p/946f88f8d3",
        },
        {
          id: "pp-09",
          title: "Voice search for TV",
          artist: "Tony Kim",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/TV.mp4",
          price: 90,
          pieUrl: "https://cloud.protopie.io/p/60ee64cda0",
        },
        {
          id: "pp-10",
          title: "Finance App Visual Interaction 2.0",
          artist: "Arpit Agrawal",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Credit_Card_App.mp4",
          price: 90,
          pieUrl:
            "https://cloud.protopie.io/p/09ce2fdf84/21?ui=true&mockup=true&touchHint=true&scaleToFit=true&cursorType=touch",
        },
        {
          id: "pp-11",
          title: "Whack-a-mole",
          artist: "Changmo Kang",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Whack_a_mole.mp4",
          price: 90,
          pieUrl: "https://cloud.protopie.io/p/ab796f897e",
        },
        {
          id: "pp-12",
          title: "Voice Note",
          artist: "Haerin Song",
          desc: `Made by Haerin Song
                      (Soda Design)`,
          thumbnail:
            "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Voice_note_with_sound_wave.mp4",
          price: 90,
          pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
        },
      ];
      dispatch(fetchStart());
      const res = prototypesBackend;
      const findRes = res.find((prototype) => prototype.id === id);
      dispatch(fetchSuccess(findRes));
      console.log("findRes:", findRes);
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
}
