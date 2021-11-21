const db = require('../../../config/firebase')
const admin = require('firebase-admin')
module.exports.getOrder = async (req, res)=>{
    let allData = await db.collection('Users')
    .doc('3cX4VUVJXcVwQtsYTIb78eKy2DK2')
    .collection('Info_Notifications')
    .get();
    allData.forEach((doc) => {
        return res.status(200).json({
            'data': doc.data()
        })
    })
}

function notificationHelper(registrationToken, message, options){
    let flag = true
    admin.messaging().sendToDevice(registrationToken, message, options)
      .then( response => {
          flag = true
          return true
      })
      .catch( error => {
          console.log("Error Sending Notifications: ", error)
          flag = false
          return false
      });
      if(flag){
          return true
      }
      return false
}

module.exports.statusUpdate = async (req, res) =>{
    // Updating the order status
    await db.collection('Users')
    .doc('3cX4VUVJXcVwQtsYTIb78eKy2DK2')
    .collection('Info_Notifications')
    .doc('1gFVsasfh53bL2CT3cXV')
    .update({
        status: "Completed"
    });

    // Sending the update notification
    const notification_options = {
        notification:{
            title: "Test Node",
            body: "Let me know if you are receiving the notification",
        },
        data:{
            priority: "high",
            timeToLive: "60 * 60 * 24"
        }
    };

    const registrationToken = 'dcZtAkQcTg6Iaf5zyCUX1u:APA91bH1HrCNjLz_qGrkCMEdvUbYfCQa3sMTr5SgibVmlLXfToCIyXoJDicYB_wts6ZJC0ilIDjh55PMFDrEuOnSTyZYSrzkrGESvDZkWlCmN25zIR7bI5KT8l86AFHv7Vt-PKYbGLl_'
    const message = "Status Updated"
    const options =  notification_options

    let notificationStatus = notificationHelper(registrationToken, options)
    if(notificationStatus){
        return res.status(200).json({
            "message": 'Status Updated and Notification Sent'
        })
    }
    return res.status(200).json({
        "message": 'Status Updated, Error sending in Notification'
    })
}