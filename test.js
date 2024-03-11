function findSpareChairs(Rooms, need) {
    if (need === 0) {
        return 1;
    }

    const chairsTaken = [];
    let t_ChairsNeeded = need;

    for (const room of Rooms) {
        const [occupants, totalChairs] = room;
        const occupiedChairs = occupants.length;
        const spareChairs = Math.max(0, totalChairs - occupiedChairs);

        if (spareChairs >= t_ChairsNeeded) {
            chairsTaken.push(t_ChairsNeeded);
            return chairsTaken;
        } else if (spareChairs > 0) {
            chairsTaken.push(spareChairs);
            t_ChairsNeeded -= spareChairs;
        } else if (t_ChairsNeeded>0&&spareChairs==0){
            chairsTaken.push(spareChairs);
        }

    }

    if (t_ChairsNeeded > 0) {
        return 0;
    }

    return chairsTaken;
}

const meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXXXXXX', 7],['XXXXXXX', 8]];
const needChairs = 5;
const result = findSpareChairs(meetingRooms, needChairs);
console.log(result);