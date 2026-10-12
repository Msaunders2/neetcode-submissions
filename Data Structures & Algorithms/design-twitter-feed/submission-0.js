class Twitter {
    constructor() {
        this.time = 0;
        this.tweetMap = new Map();
        //key: user ID
        //Val: [tweetID,time]
        this.followingMap = new Map();
        //key: user ID
        //Val: Set of following
        this.heap = new MaxPriorityQueue(triple => triple[1]);
        //time second val: [tweetID,time,userID], type[]
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.time++;

        if(this.tweetMap.has(userId)){
            this.tweetMap.get(userId).push([tweetId,this.time]);
        }else{
            this.tweetMap.set(userId, [tweetId,this.time]);
        }

        this.heap.enqueue([tweetId, this.time, userId]);

    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let feed = [];
        let allTweets = [];

        while(feed.length < 10 && this.heap.size() > 0){
            let [tweetID, time, userwhoPostedtheTweet] = this.heap.dequeue();
            //[tweetID, time, idOf userwhoPostedtheTweet]
            if(this.followingMap.has(userId)){
                let following = this.followingMap.get(userId)
                //user see there own tweets
                if(following.has(userwhoPostedtheTweet) || userwhoPostedtheTweet === userId){
                    feed.push(tweetID);
                }else{
                    //user doesn't follow this priority tweet user so do nothing
                }
            }else{
                //user follow no one: return empty but can just return there own tweets if  they have them
                if(userwhoPostedtheTweet === userId){
                    feed.push(tweetID);
                }
                
                
            }
            //save all tweets
            allTweets.push([tweetID, time, userwhoPostedtheTweet]);
        }

        //add tweets back to heap
        for(let tweet of allTweets){
            this.heap.enqueue(tweet);
        }

        return feed;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        //user cant follow themselves
        if(followerId === followeeId){
            return;
        }
        if(this.followingMap.has(followerId)){
            this.followingMap.get(followerId).add(followeeId);
        }else{
            this.followingMap.set(followerId, new Set([followeeId]));
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followingMap.has(followerId)){
            //remove followeeId from followerId[] to unfollow
            this.followingMap.get(followerId).delete(followeeId);
        }else{
            //invalid case: use cant unfollow someone they dont follow currently 
        }
    }
}
