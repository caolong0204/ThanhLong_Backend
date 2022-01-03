const fetch = require("node-fetch");

class MusicController {
  index(req, res) {
    res.send("Music Page");
  }

  async convertToMp3(req, res) {
    const videoId = req.body.videoID;
    if (!videoId) {
      res
        .status(420)
        .json({ success: false, message: "Please input videoId!!!" });
    }
    const fetchApi = await fetch(
      `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": process.env.API_HOST,
          "x-rapidapi-key": process.env.API_KEY,
        },
      }
    );

    const fetchResponse = await fetchApi.json();
    if (fetchResponse.status === "ok") {
      return res.json({
        success: true,
        songInfor: {
          song_title: fetchResponse.title,
          song_link: fetchResponse.link,
          song_duration: fetchResponse.duration,
        },
        message: fetchResponse.msg,
      });
    }

    return res.json({
      success: false,
      message: fetchResponse.msg,
    });
  }
}
module.exports = new MusicController();
