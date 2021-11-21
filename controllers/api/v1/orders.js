const db = require('../../../config/firebase')

module.exports.getOrder = async (req, res)=>{

    let allData = await db.collection('Users')
    .doc('3cX4VUVJXcVwQtsYTIb78eKy2DK2')
    .collection('Info_Notifications')
    .get();
    allData.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        return res.status(200).json({
            'data': doc.data()
        })
    })
    
}

module.exports.statusUpdate = async (req, res) =>{
    await db.collection('Users')
    .doc('3cX4VUVJXcVwQtsYTIb78eKy2DK2')
    .collection('Info_Notifications')
    .doc('1gFVsasfh53bL2CT3cXV')
    .update({
        status: "Completed"
    });
    return res.status(201).json({
        "message": 'Status Updated'
    })
}