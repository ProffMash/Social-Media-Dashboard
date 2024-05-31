const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});

const fetchData = () => {
    // fetch('http://localhost:3000/socialMediaMetrics')
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Facebook
            const facebook1 = data.social.facebook;
            const fb = document.getElementById("fb-followers");
            fb.textContent = facebook1.followers;

            const fbViews = document.getElementById("fb-V");
            fbViews.innerHTML = facebook1.pageViews;

            // Twitter
            const twitter1 = data.social.twitter;
            const tw = document.getElementById("tw-followers");
            tw.innerHTML = twitter1.followers;

            const twViews = document.getElementById("tw-V");
            twViews.innerHTML = twitter1.pageViews;

            // Instagram
            const instagram1 = data.social.instagram;
            const ig = document.getElementById("ig-followers");
            ig.innerHTML = instagram1.followers;

            const igViews = document.getElementById("ig-V");
            igViews.innerHTML = instagram1.pageViews;

            // YouTube
            const youtube1 = data.social.youtube;
            const yt = document.getElementById("yt-followers");
            yt.innerHTML = youtube1.followers;

            const ytViews = document.getElementById("yt-V");
            ytViews.innerHTML = youtube1.pageViews;

            // Additional Data
            const fbRetweets = document.getElementById("fb-T");
            fbRetweets.innerHTML = facebook1.retweets;

            const twLikes = document.getElementById("tw-L");
            twLikes.innerHTML = twitter1.likes;

            const igLikes = document.getElementById("ig-L");
            igLikes.innerHTML = instagram1.likes;

            const ytLikes = document.getElementById("yt-Vw");
            ytLikes.innerHTML = youtube1.likes;
        })
}

fetchData();
