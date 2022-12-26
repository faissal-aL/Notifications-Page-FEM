const markAsRead = document.getElementById('mark-as-read');
const notifications = Array.from(document.getElementsByClassName('notification'));
const unreadNotifications = document.getElementsByClassName('unread-notif');
const notificationsNumber = document.getElementById('notif-number');

for(let i=0; i < notifications.length ; i++){
    notifications[i].classList.add('unread-notif');
    notifications[i].getElementsByTagName('h3')[0].classList.add('unread-notif-dot');
}

notifications.forEach(element => {
    element.addEventListener("click",function(){
        element.classList.remove('unread-notif');
        element.getElementsByTagName('h3')[0].classList.remove('unread-notif-dot');
        notificationsNumber.innerHTML = unreadNotifications.length;
    })  
});


markAsRead.addEventListener("click",function(){
    for(let i=0; i < notifications.length ; i++){
        notifications[i].classList.remove('unread-notif');
        notifications[i].getElementsByTagName('h3')[0].classList.remove('unread-notif-dot');
        console.log('h3 is ',notifications[i].getElementsByTagName('h3')[0]);
    }
    notificationsNumber.innerHTML = unreadNotifications.length;
})
notificationsNumber.innerHTML = unreadNotifications.length;
