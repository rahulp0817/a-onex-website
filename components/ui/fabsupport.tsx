// import React, { useState, useRef, useEffect } from 'react';
// import { MessageCircle, X, Send, Phone, Mail, Clock, User, Bot } from 'lucide-react';

// const FabSupport = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! Welcome to AquaLux Premium Water. How can I assist you today?",
//       sender: 'support',
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isOpen]);

//   const handleSendMessage = () => {
//     if (message.trim() === '') return;

//     const newMessage = {
//       id: messages.length + 1,
//       text: message,
//       sender: 'user',
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setMessages([...messages, newMessage]);
//     setMessage('');
//     setIsTyping(true);

//     // Simulate support response
//     setTimeout(() => {
//       setIsTyping(false);
//       const supportResponse = {
//         id: messages.length + 2,
//         text: getSupportResponse(message),
//         sender: 'support',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
//       setMessages(prev => [...prev, supportResponse]);
//     }, 1500);
//   };

//   const getSupportResponse = (userMessage) => {
//     const msg = userMessage.toLowerCase();
//     if (msg.includes('price') || msg.includes('cost')) {
//       return "Our premium water collection ranges from $12.99 to $29.99. Would you like detailed pricing information for specific products?";
//     } else if (msg.includes('delivery') || msg.includes('shipping')) {
//       return "We offer free premium delivery for orders over $50. Standard delivery takes 2-3 business days. Express delivery is available within 24 hours.";
//     } else if (msg.includes('product') || msg.includes('water')) {
//       return "We have three premium collections: Alpine Pure, Crystal Elite, and Platinum Reserve. Each is sourced from unique locations with distinct mineral profiles. Which one interests you most?";
//     } else if (msg.includes('hello') || msg.includes('hi')) {
//       return "Hello! I'm here to help you with any questions about our premium water collection. What would you like to know?";
//     } else {
//       return "Thank you for your message. Our water sommelier team will provide you with personalized recommendations. Is there anything specific about our premium water collection you'd like to know?";
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const quickActions = [
//     { icon: Phone, text: "Request Call", action: () => console.log('Call requested') },
//     { icon: Mail, text: "Email Support", action: () => console.log('Email support') },
//     { icon: Clock, text: "Schedule Consultation", action: () => console.log('Schedule consultation') }
//   ];

//   return (
//     <>
//       {/* Floating Action Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={`w-16 h-16 rounded-full shadow-2xl transform transition-all duration-300 flex items-center justify-center ${
//             isOpen
//               ? 'bg-red-500 hover:bg-red-600 rotate-180'
//               : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-110'
//           }`}
//         >
//           {isOpen ? (
//             <X className="h-6 w-6 text-white" />
//           ) : (
//             <MessageCircle className="h-6 w-6 text-white" />
//           )}
//         </button>

//         {/* Notification Badge */}
//         {!isOpen && (
//           <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
//             <span className="text-white text-xs font-bold">1</span>
//           </div>
//         )}
//       </div>

//       {/* Chat Modal */}
//       <div className={`fixed bottom-24 right-6 z-40 transform transition-all duration-300 ${
//         isOpen
//           ? 'translate-y-0 opacity-100 scale-100'
//           : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
//       }`}>
//         <div className="w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                 <Bot className="h-5 w-5" />
//               </div>
//               <div>
//                 <h3 className="font-semibold">Premium Support</h3>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                   <span className="text-sm opacity-90">Online now</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Messages Area */}
//           <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
//             {messages.map((msg) => (
//               <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[80%] p-3 rounded-2xl ${
//                   msg.sender === 'user'
//                     ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-md'
//                     : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
//                 }`}>
//                   <p className="text-sm leading-relaxed">{msg.text}</p>
//                   <span className={`text-xs mt-1 block ${
//                     msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
//                   }`}>
//                     {msg.timestamp}
//                   </span>
//                 </div>
//               </div>
//             ))}

//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border max-w-[80%]">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Quick Actions */}
//           <div className="px-4 py-2 bg-white border-t border-gray-100">
//             <div className="flex space-x-2">
//               {quickActions.map((action, index) => (
//                 <button
//                   key={index}
//                   onClick={action.action}
//                   className="flex items-center space-x-1 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
//                 >
//                   <action.icon className="h-3 w-3" />
//                   <span>{action.text}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Input Area */}
//           <div className="p-4 bg-white border-t border-gray-100">
//             <div className="flex items-end space-x-3">
//               <div className="flex-1">
//                 <textarea
//                   ref={inputRef}
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Type your message..."
//                   rows="1"
//                   className="w-full p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                   style={{ minHeight: '44px', maxHeight: '100px' }}
//                 />
//               </div>
//               <button
//                 onClick={handleSendMessage}
//                 disabled={message.trim() === ''}
//                 className={`p-3 rounded-xl transition-all duration-200 ${
//                   message.trim() === ''
//                     ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                     : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105'
//                 }`}
//               >
//                 <Send className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default FabSupport;


// bg-gradient-to-r from-green-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-110
