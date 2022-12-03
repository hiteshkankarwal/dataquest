export const dataQuestABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "answerHash", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "answerer", "type": "address" }, { "indexed": false, "internalType": "string", "name": "answerLink", "type": "string" }, { "indexed": false, "internalType": "string", "name": "answerDescription", "type": "string" }, { "indexed": false, "internalType": "string", "name": "answerImageUrl", "type": "string" }], "name": "AnswerSubmitted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "questioner", "type": "address" }, { "indexed": false, "internalType": "string", "name": "title", "type": "string" }, { "indexed": false, "internalType": "string", "name": "description", "type": "string" }, { "indexed": false, "internalType": "string", "name": "imageUrl", "type": "string" }, { "indexed": false, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "startTimedtsmp", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endTimestamp", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalWinningAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256[]", "name": "winnerAmount", "type": "uint256[]" }], "name": "QuestionCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }, { "indexed": false, "internalType": "address[]", "name": "winners", "type": "address[]" }], "name": "WinnersDeclared", "type": "event" }, { "inputs": [], "name": "answerCounter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "answerMap", "outputs": [{ "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }, { "internalType": "string", "name": "linkToAnswer", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" }, { "internalType": "address", "name": "answerer", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "title", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "startTimestamp", "type": "uint256" }, { "internalType": "uint256", "name": "endTimestamp", "type": "uint256" }, { "internalType": "uint256", "name": "totalWinningAmount", "type": "uint256" }, { "internalType": "uint256[]", "name": "winnersAmount", "type": "uint256[]" }, { "internalType": "string", "name": "imageUrl", "type": "string" }], "name": "createQuestion", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }, { "internalType": "address[]", "name": "winners", "type": "address[]" }], "name": "declareWinners", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }], "name": "getQuestionAnswersMap", "outputs": [{ "components": [{ "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }, { "internalType": "string", "name": "linkToAnswer", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" }, { "internalType": "address", "name": "answerer", "type": "address" }], "internalType": "struct DataQuestV4.Answer[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }], "name": "getWinners", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "questionAnswersMap", "outputs": [{ "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }, { "internalType": "string", "name": "linkToAnswer", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" }, { "internalType": "address", "name": "answerer", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "questionCounter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "questionMap", "outputs": [{ "internalType": "address", "name": "questioner", "type": "address" }, { "internalType": "string", "name": "title", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" }, { "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "totalWinningAmount", "type": "uint256" }, { "internalType": "uint256", "name": "startTimestamp", "type": "uint256" }, { "internalType": "uint256", "name": "endTimestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "questionWinnersMap", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "questionHash", "type": "bytes32" }, { "internalType": "string", "name": "answerLink", "type": "string" }, { "internalType": "string", "name": "answerDescription", "type": "string" }, { "internalType": "string", "name": "answerImageUrl", "type": "string" }], "name": "submitAnswer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]