class MediaCardImage {
    constructor(media) {
        this._media = media
    }

    createMediaCard() {
        const $article = document.createElement( 'article' )

        const mediaCard = 
        `<article>
            <a href="#" alt="lien vers image">
                <div>
                    <div class="containerImage">
                        <img src="${this._media.image}" alt=" ">
                    </div>
                    <div class="description">
                        <div class="titre">
                            <p>${this._media.title}</p>
                        </div>
                        <div class="numberLike">
                            <p class="likes">${this._media.likes}</p>
                            <i class="fas fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </a>
        </article>`

        $article.innerHTML = mediaCard
        return $article
    }
}


class MediaCardVideo {
    constructor(media) {
        this._media = media
    }

    createMediaCard() {
        const $article = document.createElement( 'article' )

        const mediaCard =
        `<article>
            <a href="#" alt="lien vers image">
                <div>
                    <div class="containerImage">
                    <video controls>
                        <source src="${this._media.video}" type="mp4">
                    </video>
                    </div>
                    <div class="description">
                        <div class="numberLike">
                            <p class="likes">${this._media.likes}</p>
                            <i class="fas fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </a>
        </article>`

        $article.innerHTML = mediaCard
        return $article
    }
}