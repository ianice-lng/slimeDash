export async function dead(pseudo, time, speed, piece) {
    fetch("http://localhost:3265/insert/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            TIME: time,
            SPEED: speed,
            PSEUDO: pseudo,
            PIECE: piece
        })
    })
}

export function deadInterface(){

}