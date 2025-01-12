// export const analyzeCodeWithGemini = async (code) => {
//     const apiUrl = "http://localhost:3000/analyze-code"; 
//     try {
//         const response = await fetch(apiUrl, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ code: code }),
//         });
//         console.log("Gemini Response Status:", response.status);
//         console.log("Gemini Response Headers:", response.headers);
//         if (!response.ok) {
//             const errorText = await response.text();
//             console.error("Gemini API request failed:", response.status, errorText);
//             throw new Error(`Gemini API request failed with status ${response.status}: ${errorText}`);
//         }
//         const contentType = response.headers.get('content-type');
//         if (!contentType || !contentType.includes('application/json')) {
//             const errorText = await response.text();
//             console.error("Gemini API returned invalid content type", contentType, errorText);
//             throw new Error(`Gemini API returned invalid content type ${contentType}: ${errorText}`);
//         }
//         const responseText = await response.text();
//         console.log("Gemini Raw Response:", responseText);
//         if (!responseText) {
//             throw new Error("Empty response from Gemini API");
//         }
//         let data;
//         try {
//             data = JSON.parse(responseText);
//         } catch (parseError) {
//             console.error('Error parsing json', parseError);
//             throw new Error(`Invalid JSON response from Gemini: ${parseError.message}, response: ${responseText}`);
//         }
//         console.log("Gemini Data:", data);
//         return data;
//     } catch (error) {
//         console.error("Error in analyzeCodeWithGemini:", error);
//         throw error; 
//     }
// }
  import { GoogleGenerativeAI,HarmCategory,HarmBlockThreshold } from "@google/generative-ai";
  
  const apiKey = "AIzaSyCfU1mnmPjJ06bN2cZ-HJVBjr5titBlOyk";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "import React from \"react\";\nimport { FaCopy, FaCogs, FaHeart } from \"react-icons/fa\"; \nimport travel from '../assets/travel.jpg'\n\nconst About = () => {\n  return (\n    <section className=\"py-10 bg-white sm:py-16 lg:py-24\">\n      <div className=\"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8\">\n        <div className=\"max-w-2xl mx-auto text-center\">\n          <h2 className=\"mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl\">\n            ✈︎\"Travelling—it leaves you speechless, then turns you into a storyteller\"✈︎\n          </h2>\n        </div>\n        <div className=\"grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4\">\n          <div className=\"space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12\">\n            <div className=\"flex items-start\">\n              <FaCopy className=\"flex-shrink-0 text-green-500 w-9 h-9\" />{\" \"}\n              <div className=\"ml-5\">\n                <h3 className=\"text-xl font-semibold text-black\">\n                  Got a detailed plan\n                </h3>\n                <p className=\"mt-3 text-base text-gray-600\">\n                  AI provides you to have a fully detailed plan for your trip.\n                </p>\n              </div>\n            </div>\n            <div className=\"flex items-start\">\n              <FaCogs className=\"flex-shrink-0 text-blue-600 w-9 h-9\" />{\" \"}\n              <div className=\"ml-5\">\n                <h3 className=\"text-xl font-semibold text-black\">\n                  Easy to Customize\n                </h3>\n                <p className=\"mt-3 text-base text-gray-600\">\n                  TripTide are highly customizable, allowing\n                  developers to easily adapt them to fit any design or brand\n                  requirement.\n                </p>\n              </div>\n            </div>\n            <div className=\"flex items-start\">\n              <FaHeart className=\"flex-shrink-0 text-red-500 w-9 h-9\" />{\" \"}\n              <div className=\"ml-5\">\n                <h3 className=\"text-xl font-semibold text-black\">\n                  Built with Love \n                </h3>\n                <p className=\"mt-3 text-base text-gray-600\">\n                  TripTide is crafted with precision, to deliver\n                  modern, responsive, and flexible components for developers.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div className=\"lg:col-span-3\">\n            <img\n              className=\"w-full rounded-lg shadow-xl\"\n              src={travel}\n              alt=\"Auraui Dashboard\"\n            />\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n};\n\nexport default About;\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, this is a good start for an \"About\" section using React and Tailwind CSS! Here's a breakdown of the code, along with some suggestions for improvements and best practices:\n\n**Current Code Analysis**\n\n*   **Structure:**\n    *   The component is well-structured with a clear `section`, a container div, and content arranged using `grid`.\n    *   The responsive design using `sm:` and `lg:` prefixes works well for adapting to different screen sizes.\n    *   The usage of Tailwind's utility classes makes styling concise and readable.\n*   **Content:**\n    *   The section includes a compelling heading about travel.\n    *   It features three key points with icons, titles, and descriptions, which effectively convey the features/benefits.\n    *   It includes an engaging image related to travel.\n*   **Icons:**\n    *   Uses React Icons (`react-icons`) for the icons, which is great for flexibility and customizability.\n*   **Styling:**\n    *   Tailwind CSS classes are used effectively for spacing, layout, colors, and typography.\n\n**Suggestions for Improvements**\n\n1.  **Accessibility:**\n    *   **Icon Titles:** While icons are nice visually, make sure they're accessible to screen readers. Add `aria-hidden=\"true\"` to the icon elements.\n    *   **Alt Text:** Make sure the image's `alt` attribute is descriptive.\n2.  **Semantic HTML:**\n    *   Consider using `h3` instead of `h2` for the section title.\n3.  **Code Readability/Maintainability**\n    *   Consider using a component or a mapping structure for your feature cards, rather than repeating them.\n\n**Improved Code with Suggestions**\n\n```jsx\nimport React from \"react\";\nimport { FaCopy, FaCogs, FaHeart } from \"react-icons/fa\";\nimport travel from '../assets/travel.jpg'\n\nconst Feature = ({ icon, title, description }) => (\n    <div className=\"flex items-start\">\n        {React.cloneElement(icon, { className: \"flex-shrink-0 text-green-500 w-9 h-9\", \"aria-hidden\": true })}\n        <div className=\"ml-5\">\n            <h3 className=\"text-xl font-semibold text-black\">{title}</h3>\n            <p className=\"mt-3 text-base text-gray-600\">{description}</p>\n        </div>\n    </div>\n);\n\nconst About = () => {\n    const features = [\n        {\n            icon: <FaCopy />,\n            title: \"Got a detailed plan\",\n            description: \"AI provides you to have a fully detailed plan for your trip.\",\n        },\n        {\n            icon: <FaCogs />,\n            title: \"Easy to Customize\",\n            description:\n                \"TripTide are highly customizable, allowing developers to easily adapt them to fit any design or brand requirement.\",\n        },\n        {\n            icon: <FaHeart />,\n            title: \"Built with Love\",\n            description:\n                \"TripTide is crafted with precision, to deliver modern, responsive, and flexible components for developers.\",\n        },\n    ];\n\n\n    return (\n        <section className=\"py-10 bg-white sm:py-16 lg:py-24\">\n            <div className=\"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8\">\n                <div className=\"max-w-2xl mx-auto text-center\">\n                    <h2 className=\"mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl\">\n                        ✈︎\"Travelling—it leaves you speechless, then turns you into a storyteller\"✈︎\n                    </h2>\n                </div>\n                <div className=\"grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4\">\n                    <div className=\"space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12\">\n                        {features.map((feature, index) => (\n                            <Feature key={index} {...feature} />\n                        ))}\n                    </div>\n                    <div className=\"lg:col-span-3\">\n                        <img\n                            className=\"w-full rounded-lg shadow-xl\"\n                            src={travel}\n                            alt=\"A person looking at a mountain landscape.\"\n                        />\n                    </div>\n                </div>\n            </div>\n        </section>\n    );\n};\n\nexport default About;\n```\n\n**Explanation of Changes**\n\n*   **`Feature` Component:**\n    *   This component now encapsulates the structure of a single feature with an icon, title, and description.\n        *   It takes in an `icon`, `title`, and `description` as props.\n        *   The icon is cloned and updated with `aria-hidden` to ensure screen readers can ignore the icons, and styling classes.\n*   **Mapping Features:**\n    *   The `features` array now contains objects representing each feature.\n    *   We use `map` to render the `Feature` components dynamically, making the code more flexible.\n    *   We've also added a unique `key` prop when mapping.\n*   **Alt Text:**\n    *   The `alt` attribute of the image is updated to give a descriptive label of the image.\n*   **Semantic HTML:**\n    *   The `h2` title in the text content remains as it is part of the main section content.\n    *   The `h3` title for the cards remain.\n\n**Key Takeaways**\n\n*   **Componentization:** Creating components for repeated elements keeps your code DRY (Don't Repeat Yourself) and more maintainable.\n*   **Data-Driven:** Using a data structure (like the `features` array) to manage content makes the component more flexible and easier to update.\n*   **Accessibility:** Pay attention to accessibility. Using `aria-hidden` ensures that screen readers are not distracted by icons. Add descriptive `alt` text to images.\n*   **Semantic HTML:** Use heading elements properly.\n\nThis revised code is more organized, maintainable, and accessible.\n"},
          ],
        },
      ],
    }); 
  export const AI_Prompt="Tell the mistakes and solutions if there are mistakes in the code and write in a order:{code}"