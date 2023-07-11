# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Boolean}
require "set"

def can_finish(num_courses, prerequisites)
    visited = Set.new()
    visiting = Set.new()
    graph = build_graph(num_courses, prerequisites)
    
    (0...num_courses).each do |course|
       return false if has_cycle(graph, course, visited, visiting) 
    end
    
    return true
end

def build_graph(num_courses, prereqs)
    graph = {}
    
    (0...num_courses).each { |course| graph[course] = [] }
    prereqs.each { |a, b| graph[a] << b }
    
    graph
end

def has_cycle(graph, course, visited, visiting)
    return false if visited.include?(course)
    return true if visiting.include?(course)
    
    visiting << course
    graph[course].each do |prereq|
        return true if has_cycle(graph, prereq, visited, visiting)
    end
    visiting.delete(course)
    visited << course
    
    false
end